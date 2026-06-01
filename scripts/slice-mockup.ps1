# Re-slice brand photos from public/images/mockup-full.png
$src = Join-Path $PSScriptRoot "..\public\images\mockup-full.png"
$out = Join-Path $PSScriptRoot "..\public\images"
if (-not (Test-Path $src)) { Write-Error "Place mockup at public/images/mockup-full.png"; exit 1 }

Add-Type -AssemblyName System.Drawing
function Save-Crop($dest, $x, $y, $w, $h, [int]$scale = 3, [string]$format = "png") {
  $img = [System.Drawing.Image]::FromFile($src)
  $bmp = New-Object System.Drawing.Bitmap($w, $h)
  $g = [System.Drawing.Graphics]::FromImage($bmp)
  $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
  $srcRect = New-Object System.Drawing.Rectangle($x, $y, $w, $h)
  $g.DrawImage($img, 0, 0, $srcRect, [System.Drawing.GraphicsUnit]::Pixel)
  $g.Dispose()
  if ($scale -gt 1) {
    $up = New-Object System.Drawing.Bitmap(($w * $scale), ($h * $scale))
    $ug = [System.Drawing.Graphics]::FromImage($up)
    $ug.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $ug.DrawImage($bmp, 0, 0, ($w * $scale), ($h * $scale))
    $ug.Dispose(); $bmp.Dispose(); $bmp = $up
  }
  if ($format -eq "jpg") {
    $codec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq "image/jpeg" }
    $enc = New-Object System.Drawing.Imaging.EncoderParameters(1)
    $enc.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, 98L)
    $bmp.Save($dest, $codec, $enc)
  } else {
    $bmp.Save($dest, [System.Drawing.Imaging.ImageFormat]::Png)
  }
  $bmp.Dispose(); $img.Dispose()
}

Save-Crop (Join-Path $out "hero-photo.png") 262 104 264 152 3
Save-Crop (Join-Path $out "product.png")      270 454 256  54 3
Save-Crop (Join-Path $out "journey.png")      358 554 168 124 5
Save-Crop (Join-Path $out "journey-seated.jpg") 358 554 168 124 6 "jpg"
Write-Host "Done: hero-photo.png, product.png, journey.png, journey-seated.jpg"
