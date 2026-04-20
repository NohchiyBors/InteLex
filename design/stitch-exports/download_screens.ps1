$ErrorActionPreference = "Stop"
$outDir = $PSScriptRoot
Set-Location $outDir

if (-not $env:STITCH_GOOGLE_API_KEY) {
    Write-Error "Задайте переменную окружения STITCH_GOOGLE_API_KEY (ключ для X-Goog-Api-Key)."
}

# Project: InterLex Language Platform
$projectId = "9119426597994234954"
$screens = [ordered]@{
    "Kazakhstan_Hub"       = "99a2ebf6d2284a86b1e3c49a2046975a"
    "Packages_Pricing"      = "103af18db3ad4776b116342c60dd17ce"
    "Georgia_Hub"           = "18a55d235ecd4f9480fb915382a9686a"
    "Home_Page"             = "c05fb4505604411db5cd0c48c054e97e"
    "Services_Catalog"      = "78bc6ce4b5144d5d9bdbe8f92aba5862"
    "Design_System"         = "asset-stub-assets-9a3cde98575843ed92b0b7a9f3dd78e5-1776586824041"
}

$headers = @{
    "Content-Type"    = "application/json"
    "X-Goog-Api-Key" = $env:STITCH_GOOGLE_API_KEY
}

foreach ($entry in $screens.GetEnumerator()) {
    $name = $entry.Key
    $screenId = $entry.Value

    $body = @{
        jsonrpc = "2.0"
        id      = 1
        method  = "tools/call"
        params  = @{
            name = "get_screen"
            arguments = @{
                name = "projects/$projectId/screens/$screenId"
            }
        }
    } | ConvertTo-Json -Depth 6

    try {
        $response = Invoke-RestMethod -Uri "https://stitch.googleapis.com/mcp" -Method POST -Headers $headers -Body $body
        if ($response.result.isError) {
            Write-Host "Error for $name :" ($response.result | ConvertTo-Json -Depth 6)
            continue
        }
        $contentStr = $response.result.content[0].text
        $screenData = $contentStr | ConvertFrom-Json

        $htmlUrl = $screenData.htmlCode.downloadUrl
        $imgUrl = $screenData.screenshot.downloadUrl

        if ($htmlUrl) {
            Write-Host "Downloading $name HTML..."
            curl.exe -s -L $htmlUrl -o (Join-Path $outDir "${name}_code.html")
        }
        if ($imgUrl) {
            Write-Host "Downloading $name Image..."
            curl.exe -s -L $imgUrl -o (Join-Path $outDir "${name}_screenshot.png")
        }
        if (-not $htmlUrl -and -not $imgUrl) {
            Write-Host "No download URLs for $name (Design System asset stub may have no HTML/screenshot)."
        }
    }
    catch {
        Write-Host "Failed for $name : $($_.Exception.Message)"
    }
}

Write-Host "Done. Output: $outDir"
