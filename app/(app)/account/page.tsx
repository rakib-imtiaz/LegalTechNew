"use client"

import * as React from "react"
import { User, Edit, Save } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const AccountPage = () => {
  const [isEditing, setIsEditing] = React.useState(false)

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-2">My Account</h1>
      <p className="text-gray-500 mb-8">
        View and manage your profile information.
      </p>

      <Card className="shadow-lg rounded-xl max-w-2xl mx-auto">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="flex items-center">
            <User className="mr-2" />
            Profile Information
          </CardTitle>
          <Button variant="outline" size="sm" onClick={() => setIsEditing(!isEditing)}>
            {isEditing ? <Save className="mr-2 h-4 w-4" /> : <Edit className="mr-2 h-4 w-4" />}
            {isEditing ? "Save" : "Edit"}
          </Button>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center space-x-6">
            <Avatar className="h-24 w-24">
              <AvatarImage src="/placeholder-avatar.jpg" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <Label htmlFor="name">Name</Label>
              <Input id="name" defaultValue="John Doe" disabled={!isEditing} />
            </div>
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" defaultValue="john.doe@example.com" disabled />
          </div>
          <div>
            <Label htmlFor="subscription">Subscription</Label>
            <Input id="subscription" defaultValue="Premium" disabled />
          </div>
          {isEditing && (
            <Button className="w-full">Change Password</Button>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

export default AccountPage
