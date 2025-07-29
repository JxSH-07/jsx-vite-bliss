import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { Edit, ArrowRight, Plus, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const ProfileDashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header with gradient background */}
      <div className="bg-gradient-primary h-24 w-full relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 opacity-90" />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 -mt-12 relative z-10">
        {/* Profile Header */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-8">
          <div className="flex items-start gap-4 mb-4 lg:mb-0">
            <div className="relative">
              <div className="w-20 h-20 bg-green-600 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">agdhi</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-2xl font-bold text-foreground">Agdhi Ventures</h1>
                <Badge variant="outline" className="bg-background">Startup</Badge>
              </div>
              <Badge className="bg-warning text-warning-foreground mb-3">
                Profile Created
              </Badge>
            </div>
          </div>
          <Button variant="outline" className="self-start">
            <Edit className="w-4 h-4" />
            Edit Profile
          </Button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex gap-8 mb-8 border-b border-border">
          <button className="pb-3 border-b-2 border-primary text-primary font-medium">
            Overview
          </button>
          <button className="pb-3 text-muted-foreground hover:text-foreground">
            Engagements <span className="bg-muted text-muted-foreground px-2 py-1 rounded-full text-xs ml-1">0</span>
          </button>
          <button className="pb-3 text-muted-foreground hover:text-foreground">Funding</button>
          <button className="pb-3 text-muted-foreground hover:text-foreground">Documents</button>
          <button className="pb-3 text-muted-foreground hover:text-foreground">Logs</button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Complete Profile Card */}
            <Card className="bg-gradient-subtle border-orange-200">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-2">Complete profile</h3>
                    <p className="text-muted-foreground mb-4">
                      Add Basic Details and complete profile. Only Completed profile can be engaged.
                    </p>
                    <Button variant="default" className="gap-2">
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                  <div className="hidden md:block">
                    <div className="w-24 h-24 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
                      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                        <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* About Section */}
            <Card>
              <CardHeader>
                <h3 className="font-semibold text-lg">About</h3>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground leading-relaxed">
                  The quality of seeds has become a growing concern. The phenotypic defects of seeds are one of the criteria for 
                  judging the quality. The traditional method of detecting seed defects typically relies on manual inspection, which is 
                  inefficient and subjective. Therefore, an objective and automated seed screening method is required.
                </p>
              </CardContent>
            </Card>

            {/* Company Details */}
            <Card>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-sm text-muted-foreground mb-2">Brand Name</h4>
                    <p className="font-medium">Agdhi Ventures</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-sm text-muted-foreground mb-2">Company Registered Name</h4>
                    <p className="font-medium">Agdhi Ventures Private Limited</p>
                  </div>
                  <div className="md:col-span-2">
                    <h4 className="font-medium text-sm text-muted-foreground mb-2">Company URL</h4>
                    <a href="https://www.Agdhiventures.com" className="text-primary hover:underline">
                      https://www.Agdhiventures.com
                    </a>
                  </div>
                </div>

                <Separator className="my-6" />

                <div>
                  <h4 className="font-medium text-sm text-muted-foreground mb-4">Social Media</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center gap-3">
                      <Facebook className="w-5 h-5 text-blue-600" />
                      <a href="https://instagram.Agdhiventures.com" className="text-primary hover:underline text-sm">
                        https://instagram.Agdhiventures.com
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Twitter className="w-5 h-5 text-blue-400" />
                      <a href="https://twitter.Agdhiventures.com" className="text-primary hover:underline text-sm">
                        https://twitter.Agdhiventures.com
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Instagram className="w-5 h-5 text-pink-600" />
                      <a href="https://instagram.Agdhiventures.com" className="text-primary hover:underline text-sm">
                        https://instagram.Agdhiventures.com
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Linkedin className="w-5 h-5 text-blue-700" />
                      <a href="https://linkedin.Agdhiventures.com" className="text-primary hover:underline text-sm">
                        https://linkedin.Agdhiventures.com
                      </a>
                    </div>
                  </div>
                </div>

                <Separator className="my-6" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-sm text-muted-foreground mb-2">CIN</h4>
                    <p className="font-medium">U72900KA2020PTC134257</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-sm text-muted-foreground mb-2">Incorporated At</h4>
                    <p className="font-medium">India</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-sm text-muted-foreground mb-2">Address</h4>
                    <p className="font-medium">504, Brigade Rubix, HMT Layout, Peenya, Bangalore 560013</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-sm text-muted-foreground mb-2">Pincode</h4>
                    <p className="font-medium">560013</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Associated Members */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
                <h3 className="font-semibold">Associated Members</h3>
                <Button variant="ghost" size="sm" className="text-primary">
                  <Plus className="w-4 h-4 mr-1" />
                  add member
                </Button>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src="/placeholder.svg" />
                    <AvatarFallback>KJ</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <p className="font-medium">Kaushik Jain</p>
                    <p className="text-sm text-muted-foreground">Co-founder</p>
                  </div>
                  <div className="flex gap-2">
                    <Linkedin className="w-4 h-4 text-blue-700" />
                    <Twitter className="w-4 h-4 text-blue-400" />
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src="/placeholder.svg" />
                    <AvatarFallback>SP</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <p className="font-medium">Sushmita Pathak</p>
                    <p className="text-sm text-muted-foreground">Employee</p>
                  </div>
                  <div className="flex gap-2">
                    <Linkedin className="w-4 h-4 text-blue-700" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Referred By */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
                <h3 className="font-semibold">Referred By</h3>
                <Button variant="ghost" size="sm" className="text-primary">
                  <Plus className="w-4 h-4 mr-1" />
                  add reference
                </Button>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <div className="w-12 h-12 bg-muted rounded-full mx-auto mb-3 flex items-center justify-center">
                    <div className="w-6 h-6 bg-muted-foreground/20 rounded-full"></div>
                  </div>
                  <p className="text-muted-foreground text-sm">No reference Added</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileDashboard;