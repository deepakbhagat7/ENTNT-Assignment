"use client"
import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import CompanyManagement from "./admin/CompanyManagement"
import CommunicationMethodManagement from "./admin/CommunicationMethodManagement"

export default function AdminModule() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Admin Module</h2>
      <Tabs defaultValue="companies">
        <TabsList>
          <TabsTrigger value="companies">Company Management</TabsTrigger>
          <TabsTrigger value="methods">Communication Methods</TabsTrigger>
        </TabsList>
        <TabsContent value="companies">
          <CompanyManagement />
        </TabsContent>
        <TabsContent value="methods">
          <CommunicationMethodManagement />
        </TabsContent>
      </Tabs>
    </div>
  )
}

