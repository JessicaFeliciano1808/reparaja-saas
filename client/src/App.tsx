import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Clientes from "./pages/Clientes";
import Veiculos from "./pages/Veiculos";
import RepairOrdersList from "./pages/RepairOrdersList";
import RepairOrderDetail from "./pages/RepairOrderDetail";
import ServiceHistory from "./pages/ServiceHistory";
import Estoque from "./pages/Estoque";
import Financeiro from "./pages/Financeiro";
import CustomerPortal from "./pages/CustomerPortal";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/clientes' element={<Clientes />} />
        <Route path='/veiculos' element={<Veiculos />} />
        <Route path='/orders' element={<RepairOrdersList />} />
        <Route path='/orders/:id' element={<RepairOrderDetail />} />
        <Route path='/historico' element={<ServiceHistory />} />
        <Route path='/estoque' element={<Estoque />} />
        <Route path='/financeiro' element={<Financeiro />} />
        <Route path='/portal/:token' element={<CustomerPortal />} />
      </Routes>
    </Router>
  );
}

export default App;
