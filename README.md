# MC Systems frontend test

## How to run the project

Install packages
```bash
npm i
```

Run the project
```bash
npm run dev
```

Open browser on [localhost:5173](http://localhost:5173/)

## Folder structure

Devcontainer configuration files, used to run the project into a docker container for development purpose
```
.devcontainer/
├── .app.env
├── devcontainer.json
├── docker-compose.yml
└── Dockerfile
```

Project application unique components, providers & views, like **404**
```
src/
└── app/...
```

Project assets across the whole application
```
src/
└── assets/...
```

Project shared resources like customizable components & generic utility function needed by the whole application
```
src/
└── shared/...
```

Especific components, hooks & views needed for develop the requested features, divided by modules
```
src/
└── modules/
    └── <module>/...
```

Added by **shadcn/ui** at the very end of the development by the table component requirement
```
src/
├── components/...
└── lib/...
```
**TODO:** need to be moved inside [shared/](/src/shared/) folder & update [components.json](/components.json) file
