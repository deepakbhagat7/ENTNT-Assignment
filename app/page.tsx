import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import AdminModule from "@/components/AdminModule"
import UserModule from "@/components/UserModule"
import ReportingModule from "@/components/ReportingModule"

export default function Home() {
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Communication Tracker</h1>
      <Tabs defaultValue="user">
        <TabsList>
          <TabsTrigger value="user">User Module</TabsTrigger>
          <TabsTrigger value="admin">Admin Module</TabsTrigger>
          <TabsTrigger value="reporting">Reporting & Analytics</TabsTrigger>
        </TabsList>
        <TabsContent value="user">
          <UserModule />
        </TabsContent>
        <TabsContent value="admin">
          <AdminModule />
        </TabsContent>
        <TabsContent value="reporting">
          <ReportingModule />
        </TabsContent>
      </Tabs>
    </main>
  )
}

