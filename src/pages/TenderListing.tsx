import React from 'react';
import Navigation from '@/components/Navigation';
import SearchFilters from '@/components/SearchFilters';
import TenderCard from '@/components/TenderCard';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building2, FileText } from 'lucide-react';

const TenderListing = () => {
  const mockTenders = [
    {
      title: "Purchase of 75 Nos. Desktop Computers for Sri Lanka Insurance Gen...",
      category: "Computers & Laptops",
      source: "Login to view",
      location: "Western Province, Colombo",
      publishedDate: "Login to view",
      closingDate: "19th August 2025",
      referenceNo: "G030532",
      isToday: true,
    },
    {
      title: "Provision of Desktop Computers",
      category: "Computers & Laptops",
      source: "Login to view",
      location: "Southern Province, Hambantota",
      publishedDate: "Login to view",
      closingDate: "22nd August 2025",
      referenceNo: "G030533",
    },
    {
      title: "Construction of Multi-Purpose Building",
      category: "Construction",
      source: "Login to view",
      location: "Central Province, Kandy",
      publishedDate: "Login to view",
      closingDate: "25th August 2025",
      referenceNo: "G030534",
    },
  ];

  const categories = [
    { name: "Government Tenders", count: 29858 },
    { name: "Private Tenders", count: 638 },
    { name: "Construction", count: 5636 },
    { name: "Registration of Suppliers", count: 2800 },
    { name: "Computer & IT", count: 2752 },
    { name: "Upkeep/Repair", count: 2341 },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <SearchFilters />
      
      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Upload Tender */}
            <Card className="bg-primary text-primary-foreground">
              <CardContent className="p-6 text-center">
                <h3 className="font-semibold mb-2">To be Connect with Buyer's & Suppliers</h3>
                <p className="text-sm mb-4">Upload Your Tenders FREE</p>
                <Button variant="orange" className="w-full">
                  Upload Tender
                </Button>
              </CardContent>
            </Card>

            {/* Registration */}
            <Card className="bg-tender-orange text-accent-foreground">
              <CardContent className="p-6 text-center">
                <h3 className="font-semibold mb-4">Registration of Suppliers (2800)</h3>
                <Button variant="secondary" className="w-full">
                  Register Now
                </Button>
              </CardContent>
            </Card>

            {/* Tenders by Sectors */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Building2 className="mr-2 h-5 w-5" />
                  Tenders By Sectors
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {categories.map((category, index) => (
                  <div key={index} className="flex justify-between items-center py-2 hover:bg-muted rounded px-2 cursor-pointer">
                    <span className="text-sm">{category.name}</span>
                    <Badge variant="outline">({category.count})</Badge>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Tender Categories */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="mr-2 h-5 w-5" />
                  Tenders By Categories
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {categories.slice(2).map((category, index) => (
                  <div key={index} className="flex justify-between items-center py-2 hover:bg-muted rounded px-2 cursor-pointer">
                    <span className="text-sm">{category.name}</span>
                    <Button variant="ghost" size="sm">▶</Button>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Tender Statistics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <Card className="bg-primary text-primary-foreground">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-tender-orange">30496</div>
                  <div className="text-sm">All Tenders</div>
                </CardContent>
              </Card>
              <Card className="bg-tender-orange text-accent-foreground">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold">10</div>
                  <div className="text-sm">Today's Tenders</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-tender-orange">508</div>
                  <div className="text-sm">Live Tenders</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-primary">29988</div>
                  <div className="text-sm">Closed Tenders</div>
                </CardContent>
              </Card>
            </div>

            {/* Results Info */}
            <div className="mb-6">
              <p className="text-sm text-muted-foreground">
                Showing 1 - 10 of 30496 tenders
              </p>
            </div>

            {/* Tender Cards */}
            <div className="space-y-6">
              {mockTenders.map((tender, index) => (
                <TenderCard key={index} {...tender} />
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-8 flex justify-center">
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm">Previous</Button>
                <Button variant="default" size="sm">1</Button>
                <Button variant="outline" size="sm">2</Button>
                <Button variant="outline" size="sm">3</Button>
                <Button variant="outline" size="sm">Next</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TenderListing;