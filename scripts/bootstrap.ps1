#!/usr/bin/env pwsh

# Dignity Workspace Bootstrap Script (PowerShell)
# One-command setup for full local environment

Write-Host "🚀 Dignity Workspace Bootstrap" -ForegroundColor Cyan
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor Cyan
Write-Host ""

# Step 1: Check prerequisites
Write-Host "1️⃣  Checking prerequisites..." -ForegroundColor Yellow
$nodeVersion = node -v 2>$null
if (-not $nodeVersion) {
    Write-Host "❌ Node.js not found. Please install Node.js 20+" -ForegroundColor Red
    exit 1
}
Write-Host "   ✓ Node.js $nodeVersion" -ForegroundColor Green

$pnpmVersion = pnpm -v 2>$null
if (-not $pnpmVersion) {
    Write-Host "❌ pnpm not found. Please install pnpm 9+" -ForegroundColor Red
    exit 1
}
Write-Host "   ✓ pnpm $pnpmVersion" -ForegroundColor Green
Write-Host ""

# Step 2: Automated setup pipeline
Write-Host "2️⃣  Running automated setup..." -ForegroundColor Yellow
pnpm setup:auto
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Automated setup failed" -ForegroundColor Red
    exit 1
}
Write-Host ""

# Step 3: Summary
Write-Host "✅ Bootstrap complete!" -ForegroundColor Green
Write-Host ""
Write-Host "Next steps:" -ForegroundColor Yellow
Write-Host "  1. Run: pnpm dev"
Write-Host ""
