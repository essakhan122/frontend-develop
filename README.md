# SpotSaver

## Generate Code Sharing structure

1. Generate package.json file inside the workspace. \
    ex: here frontend is our workspace. create package.json file inside frontend folder.

    ```
    {
        "private": true,
        "name": "frontend",
        "version": "1.0.0",
        "workspaces": [
            "app", "web", "common"
        ]
   }
   ```

