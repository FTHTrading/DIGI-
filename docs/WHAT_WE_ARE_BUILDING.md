# What We Are Building

Dignity Workspace is an AI-powered institutional operations platform for private deal intake, client onboarding, compliance packet preparation, funding documentation, asset workflow management, and RWA-ready infrastructure. It combines a web dashboard, agent backend, PostgreSQL/Prisma database, automated local setup checks, and investor/client-facing term sheet documentation.

## Problem It Solves

Institutional deal execution typically breaks across disconnected tools, manual spreadsheets, fragmented documentation, and inconsistent approvals. Dignity consolidates these into one auditable system of workflow, evidence, and approvals.

## Who Uses It

- Internal operators managing onboarding, compliance, and funding packets
- Issuer and treasury stakeholders coordinating asset and settlement workflows
- Compliance, legal, and operations teams reviewing evidence and status
- Board-level approvers reviewing gated actions and audit records
- External stakeholders reviewing structured summaries and packet outputs

## What the Web Dashboard Does

- Displays clients, companies, deals, and status at a glance
- Shows required vs missing document/evidence checklists
- Exposes approval states and next operational actions
- Presents reserve/proof and governance context to authorized users
- Serves as the front-end control center for institutional workflow

## What the Agent Backend Does

- Coordinates workflow tasks and operational routing
- Performs read-only analysis/summarization for documents and records
- Detects missing fields and checklist gaps in packet preparation
- Produces internal reports and packet summaries
- Supports approval-gated actions only; no silent or autonomous financial execution

## What the Database Stores

Based on current Prisma models and package direction, the system stores:

- Reserve lots and supply state
- Audit events and approval requests
- Investor records and venue configuration
- Future expansion targets: clients, companies, deals, documents, evidence, tasks, payments, assets, compliance statuses, agent runs

## What the Automation Scripts Do

- Preflight local environment and dependencies
- Validate required environment variables and formats
- Verify required local ports and report blockers clearly
- Detect Docker/PostgreSQL readiness for local development
- Generate Prisma client and apply schema in a controlled setup path

## What the Term Sheet Is For

The term sheet provides stakeholder-ready commercial and operational framing:

- Product/operating positioning
- Monetization and pricing structure
- Implementation budget and milestone payment schedule
- Monthly operating cost ranges
- Payment terms and boundary language for institutional review

## How This Connects to CIS, POF, Funding, Assets, and RWA Readiness

The platform is designed to orchestrate:

- Client onboarding and intake normalization
- CIS-style data capture and completeness checks
- POF evidence tracking and packet assembly
- Funding memo/packet preparation and review routing
- Asset workflow references and compliance-gated status handling
- RWA readiness scaffolding (references, proofs, approvals, and auditability)

## What the System Must Not Claim or Do

- It must not claim to be a licensed broker-dealer, bank, custodian, or adviser unless formally licensed and documented
- It must not fabricate or misrepresent proof-of-funds or legal status
- It must not bypass securities, banking, AML/KYC, or jurisdictional requirements
- It must not execute live financial/blockchain actions without explicit approval gates and authorized operators

## Simple Explanation for Stakeholders

We are building the operating system for an AI-backed private deal desk. The platform turns messy client, funding, compliance, and asset workflows into organized, reviewable packets that investors, lenders, attorneys, operators, and counterparties can understand.
