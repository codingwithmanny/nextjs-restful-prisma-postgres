# NextJS Restful Prisma Postgres API

A demo project to show how to use NextJS with Prisma and Postgres to create a Restful API.

---

## Requirements

- NMV or NodeJS v18.16.1
- Docker (for local development)

---

## Local Development

```bash
# FROM: ./

pnpm install;
```

### Database Setup

**NOTE:** Make sure you have Docker installed and running on your machine.

```bash
# FROM: ./

pnpm db:up;

# [Expected Output]:
# [+] Building 0.0s (0/0)                                                                                                                                               
# [+] Running 2/2
#  ✔ Network restful_default  Created                                                                                                                              0.0s 
#  ✔ Container restful-db-1   Started  
```

Want to delete the instance?

```bash
# FROM: ./

pnpm db:down;
```

### Database Migrations

Run this if you make modifications to the schame.prisma file and want to create new migrations.

```bash
# FROM: ./

pnpm db:migrate  --name your-migration-name;
```

### Database Generate Types

```bash
# FROM: ./

pnpm db:generate;
```

### Database Seeding

```bash
# FROM: ./

pnpm db:seed;
```

### Database Backup

```bash
# FROM: ./

pnpm db:backup;
# Note the file output in the db directory for db:import
```

### Database Import

```bash
# FROM: ./

pnpm db:import;
```

### Running Local Server

```bash
# FROM: ./

pnpm dev;

# [Expected Output]:
# ...
# - ready started server on [::]:3000, url: http://localhost:3000
# ...
```

