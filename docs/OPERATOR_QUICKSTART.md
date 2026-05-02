# Operator Quickstart

## Step 1

Start Docker Desktop.

## Step 2

Run:

```bash
pnpm setup:auto
```

## Step 3

Run:

```bash
pnpm doctor
```

## Step 4

Run:

```bash
pnpm dev
```

## Step 5: If Docker Fails, Check This Exactly

- Docker Desktop is open
- Linux engine is running
- WSL is healthy
- No port conflicts on 3300/5100/5433
- .env.local exists
- DATABASE_URL is valid PostgreSQL format

Useful checks:

```powershell
docker info
wsl --status
netstat -ano | findstr :3300
netstat -ano | findstr :5100
netstat -ano | findstr :5433
```

Expected DATABASE_URL shape:

```text
postgresql://user:password@host:port/database
```
