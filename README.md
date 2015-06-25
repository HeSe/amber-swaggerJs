# amber-swaggerJs

An API layer for swaggerJs in Amber

## Getting Started

Install Amber and create an Amber project,
as shown in [Amber Instructions](https://github.com/amber-smalltalk/amber#prerequisites).

## Use AmberSwaggerJs as a library in a client project

If not already present, create a client project
in an empty directory with `amber init`.

In a client project, run

```sh
bower install AmberSwaggerJs --save
grunt devel
amber serve
```

Go to `http://localhost:4000/` in your browser and
in all packages that use AmberSwaggerJs,
add `'amber-amberswaggerjs/AmberSwaggerJs'` to the package imports,
save the change and commit the package. Reload.

## Contributing

To bring project alive (for example after `git clone`):

```sh
npm install
bower install
grunt devel
```

Developing the project (after brought alive):
 
Start server with `amber serve` and go to `http://localhost:4000/` in your browser and follow the instructions
