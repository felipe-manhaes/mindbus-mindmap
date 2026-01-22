# Mindbus
## Open Mindmap for Business

Mindbus is a SaaS mind-mapping platform focused on **business thinking, idea structuring, and organizational visibility**. It lets users quickly create, drag, connect, and organize ideas on an interactive canvas, with a roadmap for secure access control that gives executives full visibility and managers structured oversight across teams.

---

## Table of Contents
- [Project Overview](#project-overview)
- [Core Concept](#core-concept)
- [Roadmap](#roadmap)
- [Phase 1 – CRUD](#phase-1--crud)
- [Phase 2 – Interactive Canvas & CRUD](#phase-2--interactive-canvas--crud)
- [Phase 3 – Authentication & Role-Based Access Control](#phase-3--authentication--role-based-access-control)
- [API Design Philosophy](#api-design-philosophy)
- [Tech Stack](#tech-stack)
- [Architectural Decisions](#architectural-decisions)
- [Future Extensions](#future-extensions)
- [Running the Project](#running-the-project)

---

## Project Overview

**Mindbus** is a web-based mind-mapping tool designed for professionals and organizations.  
Users work on a free-form canvas to create ideas, connect concepts, and structure knowledge visually.

Unlike generic mind-mapping tools, Mindbus is built with **SaaS and business hierarchies** in mind, enabling future features such as managerial visibility, executive oversight, and organizational access rules.

---

## Core Concept

Each user interacts with a **visual canvas** where they can:

- Create idea nodes
- Drag and drop ideas freely
- Zoom in and out of the canvas
- Connect ideas with edges
- Edit and delete ideas in real time
- Persist everything as structured data

In later phases, these mindmaps become **organizational assets** governed by roles and permissions.

---

## Roadmap

Mindbus is developed in **three clearly separated phases**:

### Phase 1
- CRUD operations
- Persistent storage
- No authentication

### Phase 2
- Interactive canvas
- Drag & drop mindmap creation
- CRUD operations

### Phase 3
- JWT authentication
- Role-based access control (RBAC)
- Organizational hierarchy
- Secure access to mindmaps

This separation ensures clarity, correctness, and scalability.

---

## Phase 1 – CRUD

### Goals

Phase 1 focuses on delivering the **core CRUD functionality**:

- Clean data modeling
- Reliable persistence
- Clear frontend/backend separation

Authentication and permissions are intentionally excluded at this stage.

---

### Data Model (Phase 1)

The application persists mindmaps as structured data.

Core entities:
- **Mindmap**
- **Node**
- **Edge**

Responsibilities:
- Nodes store content, position, and metadata
- Edges store relationships between nodes
- Mindmaps act as containers and ownership boundaries

This model supports future permissions, sharing, and extensions.

---

### CRUD Operations

The backend exposes a REST API supporting:

#### Mindmaps
- Create mindmap
- Read mindmap(s)
- Update mindmap metadata
- Delete mindmap

#### Nodes
- Create node
- Update node content or position
- Delete node

#### Edges
- Create connection
- Delete connection

All operations are stateless and deterministic.

---

### Backend Responsibilities

- Input validation
- Referential integrity
- Error handling
- Consistent API responses
- Database persistence

Authorization is intentionally deferred to Phase 2.

---

## Phase 2 – Interactive Canvas & CRUD

### Goals

Phase 2 focuses on delivering the **core product experience**:

- Fast and intuitive idea creation
- Smooth canvas interactions
- Clear frontend/backend separation

Authentication and permissions are intentionally excluded at this stage.

---

### Canvas & Interaction Layer

The frontend provides an **infinite canvas experience** similar to professional whiteboard tools.

Core interactions:
- Drag & drop nodes
- Pan the canvas
- Zoom in / zoom out
- Connect nodes visually
- Select, edit, and delete nodes

The canvas layer is optimized for:
- Spatial data
- Large graphs
- Responsive interaction
- Clean state management

---

## Phase 3 – Authentication & Role-Based Access Control

### Authentication

Phase 2 introduces:
- User registration and login
- JWT-based authentication
- Secure password handling
- Token expiration strategy

All protected routes will require a valid JWT.

---

### Role-Based Access Control (RBAC)

Mindbus supports organizational roles:

- **CEO**
  - Full access to all mindmaps in the organization
- **Manager**
  - Access to mindmaps created by direct subordinates
- **Employee**
  - Access only to their own mindmaps

RBAC is enforced at the API level on every read and write operation.

---

### Authorization Rules (Example)

| Action | Employee | Manager | CEO |
|------|---------|--------|-----|
| Create mindmap | Yes | Yes | Yes |
| View own mindmaps | Yes | Yes | Yes |
| View subordinates’ mindmaps | No | Yes | Yes |
| View all mindmaps | No | No | Yes |
| Delete others’ mindmaps | No | No | Yes |

---

## API Design Philosophy

- RESTful and resource-oriented
- Predictable HTTP verbs
- Stateless authentication
- Clear error responses
- Designed for future scalability

The API is built to support:
- Web clients
- Mobile clients
- Future integrations
- Audit and analytics

---

## Tech Stack

### Frontend
- JavaScript / TypeScript
- React
- Canvas / graph rendering library
- Modern state management

### Backend
- Node.js
- REST API
- JWT authentication (Phase 2)

### Database
- Relational database designed for hierarchy and permissions

### Infrastructure (Planned)
- Docker
- Reverse proxy
- Environment-based configuration

---

## Architectural Decisions

- **Canvas-first UX**: Mindmaps are spatial by nature
- **CRUD before auth**: correctness before security
- **RBAC over simple sharing**: business-grade visibility
- **API-first design**: scalability and extensibility

---
## Part 01 – Core Architecture and Data Flow

This part describes a simple full-stack application with explicit user-controlled persistence.

### Components

**Frontend**: Allows users to create, edit, and delete notes.

**Zustand**: Stores the current in-memory state of notes so the UI updates immediately while the user is editing.

**Backend API**: Receives requests from the frontend and persists data.

**PostgreSQL**: Stores the saved notes and acts as the single source of truth.

### Data Flow

When the application loads, data is fetched from PostgreSQL and loaded into Zustand.

While the user edits a note, all changes exist only in Zustand.

No data is persisted automatically.

The user must explicitly click a "Save" action.

Only after this action are changes sent to the backend and written to PostgreSQL.

Zustand represents temporary, replaceable state.

PostgreSQL represents persistent, authoritative state.

### Scope of Part 01

This part includes:

- Explicit save action

- Basic CRUD operations

- Clear separation between in-memory state and persisted state

This section must describe only the current behavior, without assumptions about future improvements.

---
## Future Extensions

- Real-time collaboration
- Comments and discussions
- Mindmap version history
- Export (PDF / image)
- Analytics and usage insights
- AI-assisted idea clustering

---

## Running the Project

```bash
# frontend
npm install
npm run dev

# backend
npm install
npm run dev
