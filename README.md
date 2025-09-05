# 📈 Stock Ticker Application  

A stock ticker web application built with **Next.js**,
The app allows users to search for stocks, view detailed information with SEO-optimized pages, and see stock price data visualized in a graph.  

---

## 🚀 Features  

- 🔍 **Stock Search with Autocomplete** – Search for stocks using the API and navigate to detailed stock pages.  
- 📄 **Stock Details Page** – Displays stock info with SEO-friendly META tags.  
- 📊 **Stock Price Graph** – Visualizes stock prices using **Recharts**.  
- 📡 **API Integration** – Stock search, ticker movers, and price data.  
- 📱 **Responsive Design** – Optimized for desktop and mobile.  
- ⚡ **Bonus Features**  
  - Favorite stocks saved in local storage.  
  - Loading states for the graph.  
  - Rolling ticker bar at the top with live stock movements.  

---

## 🛠️ Tech Stack  

- **Frontend Framework:** [Next.js](https://nextjs.org/)  
- **UI Styling:** [Tailwind CSS](https://tailwindcss.com/)  
- **Graphing Library:** [Recharts](https://recharts.org/) 

---

## 📂 Project Structure  

```bash
├── actions/          # Reuasable Server actions 
├── hooks/            # Reusable hooks  
├── components/       # Reusable UI components  
├── app/            # Next.js pages  
│   ├── page.tsx     # Home with stock search  
│   ├── stocks/[symbol]/page.tsx  # Dynamic stock details page  
├── utils/            # API utilities and helpers  
├── styles/           # Global styles  
├── public/           # Static assets  
└── README.md         # Documentation
```


## ⚙️ Setup & Installation

### Clone the repository

```bash
git clone https://github.com/your-username/stock-ticker-app.git
cd stock-ticker-app
```

### Install dependencies
```bash
npm install
```

### Run the development server
```bash
npm run dev
```

### Open in browser
```
http://localhost:3000
```


## 📎 Submission Links


- **Live Demo:** [Live Link](https://tradebrains-assignment.vercel.app/)  
- **Loom Walkthrough Video:** [Video Link](https://www.loom.com/share/df62061ff6ff49298e1a58269fa621d1?sid=ccd71908-c20e-4440-8e45-cf5c4bad827b)  

---
