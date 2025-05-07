<#
.SYNOPSIS
    Port Management Script - Manages and terminates processes using specific ports.

.DESCRIPTION
    This script provides functionality to check if a port is in use, terminate the process using that port,
    and verify the port is free afterward. It uses netstat to find the process and taskkill to terminate it.

.PARAMETER Port
    The port number to check and free if in use.

.EXAMPLE
    .\port-management.ps1 -Port 3000
    Checks if port 3000 is in use, terminates the process if found, and verifies it's free.

.NOTES
    Author: AI Assistant
    Date: 2025-04-19
#>

[CmdletBinding()]
param (
    [Parameter(Mandatory = $true, Position = 0)]
    [ValidateRange(1, 65535)]
    [int]$Port
)

function Close-ActivePort {
    [CmdletBinding()]
    param (
        [Parameter(Mandatory = $true)]
        [ValidateRange(1, 65535)]
        [int]$Port
    )

    Write-Host "=======================================" -ForegroundColor Cyan
    Write-Host "       PORT MANAGEMENT UTILITY         " -ForegroundColor Cyan
    Write-Host "=======================================" -ForegroundColor Cyan
    Write-Host ""
    
    try {
        # Step 1: Check if the port is in use
        Write-Host "Checking if port $Port is in use..." -ForegroundColor Yellow
        $netstatResult = netstat -ano | findstr ":$Port"
        
        # If the result is empty, the port is not in use
        if (-not $netstatResult) {
            Write-Host "No process is using port $Port. The port is free." -ForegroundColor Green
            return
        }
        
        Write-Host "Found the following processes using port $Port:" -ForegroundColor Yellow
        Write-Host $netstatResult -ForegroundColor White
        
        # Step 2: Extract the PID from the netstat result
        # The PID is typically the last number in each line
        $pidPattern = '(\d+)$'
        $pids = @()
        
        $netstatResult -split "`n" | ForEach-Object {
            if ($_ -match $pidPattern) {
                $pids += $matches[1]
            }
        }
        
        $uniquePids = $pids | Select-Object -Unique
        
        if ($uniquePids.Count -eq 0) {
            Write-Host "Could not extract PID from netstat result." -ForegroundColor Red
            return
        }
        
        # Step 3: Terminate each process
        foreach ($pid in $uniquePids) {
            Write-Host "Attempting to terminate process with PID: $pid" -ForegroundColor Yellow
            
            try {
                # Get process details before terminating for better reporting
                $process = Get-Process -Id $pid -ErrorAction SilentlyContinue
                $processName = if ($process) { $process.ProcessName } else { "Unknown" }
                
                # Terminate the process
                $killResult = taskkill /PID $pid /F 2>&1
                
                if ($LASTEXITCODE -eq 0) {
                    Write-Host "Successfully terminated process '$processName' with PID $pid" -ForegroundColor Green
                } else {
                    Write-Host "Failed to terminate process with PID $pid. Error: $killResult" -ForegroundColor Red
                }
            } catch {
                Write-Host "Error terminating process with PID $pid. Error: $_" -ForegroundColor Red
            }
        }
        
        # Step 4: Verify the port is free
        Write-Host "Verifying port $Port is now free..." -ForegroundColor Yellow
        Start-Sleep -Seconds 1  # Brief pause to ensure netstat shows updated status
        
        $verifyResult = netstat -ano | findstr ":$Port"
        
        if (-not $verifyResult) {
            Write-Host "Port $Port is now free and available for use." -ForegroundColor Green
        } else {
            Write-Host "Port $Port is still in use by some process. Manual intervention may be required." -ForegroundColor Red
            Write-Host $verifyResult -ForegroundColor White
        }
        
    } catch {
        Write-Host "An error occurred during port management: $_" -ForegroundColor Red
    } finally {
        Write-Host ""
        Write-Host "=======================================" -ForegroundColor Cyan
        Write-Host "       PORT MANAGEMENT COMPLETE        " -ForegroundColor Cyan
        Write-Host "=======================================" -ForegroundColor Cyan
    }
}

# Main script execution
try {
    Close-ActivePort -Port $Port
} catch {
    Write-Host "An unexpected error occurred: $_" -ForegroundColor Red
}

