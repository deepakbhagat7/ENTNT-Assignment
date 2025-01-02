# 📅 **Calendar App**

A **Calendar Application for Communication Tracking**, built with **Next.js**, **React**, and **Tailwind CSS**, designed to streamline communication scheduling and follow-ups with companies.

---

## 🚀 **Prerequisites**

Before you begin, ensure your system meets the following requirements:

- 🖥️ A Windows, Linux, or Mac machine.
- 📦 The latest version of [Node.js and npm](https://nodejs.org/en/download/) installed.

---

## 🛠️ **Step-by-Step Installation and Setup**

### 1️⃣ **Clone the Repository**
Start by cloning the project repository to your local machine:
```bash
git clone https://github.com/your-username/calendar-app.git
cd calendar-app

```
### 2️⃣ **Install Dependencies**

```bash
npm install
```
If you encounter dependency conflicts, use one of these commands:

```bash
npm install --legacy-peer-deps
```
or
```bash
npm install --force
```

### 3️⃣ **Install shadcn/ui Components

**
```bash
npx shadcn@latest init
```

### 4️⃣ **Add Required shadcn/ui Components

**
```bash
npx shadcn@latest add button input label textarea table tabs calendar dialog checkbox

```


## ▶️ **Running the App**
 Start the development server:
 ```bash
  npm run dev
 ```

##  **Open your browser and navigate to**
```bash
http://localhost:3000
```
# 📂 **Project Structure**

The project is organized into the following directories and components:

## **Application Files**
- **`app/`**: Main application files.
- **`layout.tsx`**: Main layout component.
- **`page.tsx`**: Main page component.

## **Reusable Components**
- **`components/`**: Contains shared React components.

### **Admin Module**
- **`AdminModule.tsx`**: Admin module component.
- **`CompanyManagement.tsx`**: Manage companies (add, edit, delete).
- **`CommunicationMethodManagement.tsx`**: Manage communication methods.

### **User Module**
- **`UserModule.tsx`**: User module component.
- **`Dashboard.tsx`**: Displays company communication history.
- **`CalendarView.tsx`**: Calendar view for scheduled communications.
- **`Notifications.tsx`**: Notifications for upcoming and overdue tasks.

---

# ✨ **Features**

## **User Module**
- 📊 **Dashboard**: View company communication history and next scheduled actions.
- 📆 **Calendar View**: Manage and view scheduled communications.
- 🔔 **Notifications**: Stay updated with reminders for upcoming and overdue communications.

## **Admin Module**
- 🏢 **Company Management**: Add, edit, and delete company details.
- 🔄 **Communication Method Management**: Define and manage communication methods.

---

# 🌟 **Future Enhancements**
- 📈 **Reporting Module**: Generate communication frequency reports and analyze engagement trends.
- 📊 **Analytics**: Gain insights into overdue communications and engagement effectiveness.

---

# 👩‍💻 **Contributing**

We welcome contributions! Please fork the repository and create a pull request with detailed information about your changes.


