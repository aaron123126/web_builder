$containerName = "web_builder"
$imageName = "web_builder"

while ($true) {
    $action = Read-Host "What do you want to do? (b, s, r, n)"
    switch ($action) {
        "b" {
            Write-Host "Building Docker image..."
            docker build -t $imageName .
        }
        "s" {
            Write-Host "Starting Docker container..."
            docker run -d --name $containerName -p 3005:3005 $imageName
        }
        "r" {
            Write-Host "Removing Docker container..."
            docker rm --force $containerName
        }
        "n" {
            Write-Host "Starting server with npm..."
            npm start
        }
        "e" { break }
        "exit" { break }
        default { break }
    }
}
Write-Host "Exiting..."
exit 0