# Final Project

The application I am working with is a simple Tic Tac Toe Game web-based
application. This project uses some of the DevOps practices we've leaned
to build a complete automated software delivery process with pipelines.

## Used Practices

- Phases of SDLC: they are integrated into the project, it includes
planning, design, development, testing, deployment, and maintenance
- Source control: the project is build within this git repository,
using branching, commits, workflows and others
- Branching strategies: they are used for organized development with
bug-free code
- Building Pipelines: the steps are defines in a pipeline, so the
build process is autometed to ensure consistency and repeatability
- Continuous Integration: CI is integrated into the pipeline
- Continuous Delivery: CD practices is implemented to automatically
deploy code changes to staging or production environments after
successful Cl
- Security: security practices are embeded throughout the pipeline,
automated tests are run whenever code changes are pushed to the repository
- Docker: the application is containerized using Docker, Dockerfile is
used to define the application's dependencies and runtime environment
- Kubernetes: the containerized application is deplyed to a Kubernetes
cluster

## Additional Information

- The pipeline starts with a git repository
- The solution is T-shaped or E-shaped – where we have a nice working
horizontal + at least one deep dive vertical
- Where possible, the solution is as code
- The documentation of the project is described here
- The tools that are used are: Git, GitHub Actions, Docker, Kubernetes

## Process

- Project Planning: understand the requirements and expectations, create
a project plan, choose which practices to include in the project

  The practices that are included in the solution of the project are:
Phases of SDLC, Source control, Branching strategies, Building Pipelines,
Continuous Integration, Continuous Delivery, Security, Docker, Kubernetes.

  SDLC phase: Planning phase
- Source control: set up a Git repository for the project

  This repository is set up by forking the repository with the Tic Tac Toe
application sorce code.

  SDLC phase: Planning phase
- Branching strategies: choose a branching strategy that fits the project

  I chose to have one branch for developing the automated software delivery
process, and merge it to the main branch when needed. So I created the
develop branch and started to work there.

  SDLC phase: Planning phase
- Style Checks: execute checks that are intended to enforce a consistent
coding style across the project

  The process of the Style checks included adding licence and .editorconfig,
and then executing flake8, editorconfig-checker and mardownlint-cli. After
fixing the inconcictency of the files, I started my workflow pipeline with
these three checks.

  SDLC phase: Implementation and Testing Phase
- Testing: execute unit tests to ensure that the application logic is correct

  I executes a few unit tests to see if the functions in the source code are
working as intended. When the unit tests were done and successfully executed,
I added them as the next step in the pipeline that first waits the style
check to be completed.

  SDLC phase: Testing Phase
- Security: integrate static code analysis (SAST) tools into the Cl pipeline

  This includes using SAST tools for static code analysis, incorporating security
checks in the build and deployment stages, and regularly updating dependencies
to patch vulnerabilities. Security should be a continuous consideration
throughout the SDLC.

  SDLC phase: Implementation and Testing Phase

- Docker: write a Dockerfile to containerize your application, build and test
the Docker image locally, and then itegrate it to the pipeline

  SDLC: Implementation and Testing Phase

- Kubernetes: set up a Kubernetes cluster (local or on a cloud provider).

  Write Kubernetes manifests (YAML files) to define your application deployment.
Define Kubernetes manifests (YAML files) to specify how your application should
run, scale, and connect to other services. Use Kubernetes for orchestration and
management of containerized applications.

  SDLC phase: Implementation and Testing Phase

- Continuous Integration (CI): GitHub Action Cl tool is used to set up a basic
build pipeline

  I built the pipeline in parallel with doing the rest of the task. Each step
that needed automation is implemented in the workflow.

  SDLC phase: Implementatioon Phase

- Continuous Delivery (CD): expand the Cl pipeline to include deployment steps
to staging environments and implement automated deployment scripts or tools

  SDLC phase: Implementation and Testing Phase

- Documentation: document each step of your pipeline and the configuration details

  I wrote the documentation while I was doing the taks, so it would be consistent.
At the end I ensured that your documentation is complete and up-to-date.

  SDLC phase: Documentation Phase
