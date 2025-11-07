# 🚀 Multi-Tier Application Deployment on Kind + GHCR + GitHub Actions

## 📘 Overview
This project demonstrates a **multi-tier web application** deployed on a **Kind (Kubernetes in Docker)** cluster using **GitHub Actions** and **GitHub Container Registry (GHCR)** for CI/CD automation.

The stack includes:
- **Frontend** (React App)
- **Backend** (Node.js API)
- **Database** (PostgreSQL)

---

## ⚙️ Key Components
- **Kind Cluster:** Local Kubernetes setup with control-plane node.
- **GitHub Actions:** Automates build, push, and deploy workflows.
- **GHCR:** Stores container images securely.
- **Ingress Controller:** Routes external traffic to frontend/backend.
- **Persistent Storage:** Used for PostgreSQL stateful data.

---

## 🧩 Deployment Steps
1. **Build and Push Images to GHCR**
   - Handled automatically via GitHub Actions workflow.
2. **Create Kind Cluster**
   ```bash
   kind create cluster --name multi-tier
3. **Apply Kubernetes Manifests**
   ```bash
   kubectl apply -f k8s/
4. **Verify Deployment**
   ```bash
   kubectl -n multi get all
5. **Access Application**
   ```bash
   curl -H "Host: <public-ip>.nip.io" http://localhost/api/hello

## 🔍 Verification
```bash
kubectl cluster-info
kubectl get nodes -o wide
kubectl -n multi get pods
```
**Example Output:**
```bash
pod/backend-xxxx       Running
pod/frontend-xxxx      Running
pod/postgres-0         Running
```
## 📦 Result

✅ Successfully deployed a multi-tier application on Kubernetes using GitHub Actions and GHCR, with backend, frontend, and database pods running smoothly inside the Kind cluster.
