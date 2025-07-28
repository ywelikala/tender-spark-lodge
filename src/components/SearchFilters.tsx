import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search } from 'lucide-react';

const SearchFilters = () => {
  return (
    <div className="bg-primary text-primary-foreground py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6">
          <h2 className="text-xl font-semibold mb-2">PUBLISHED TENDERS: 30496</h2>
        </div>
        
        <div className="flex gap-2 max-w-4xl mx-auto">
          <Select>
            <SelectTrigger className="w-48 bg-white text-foreground">
              <SelectValue placeholder="All Categories" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="construction">Construction</SelectItem>
              <SelectItem value="it">Computer & IT</SelectItem>
              <SelectItem value="registration">Registration of Suppliers</SelectItem>
              <SelectItem value="upkeep">Upkeep/Repair</SelectItem>
            </SelectContent>
          </Select>
          
          <Input
            placeholder="Type Your Keyword Here"
            className="flex-1 bg-white text-foreground"
          />
          
          <Button variant="orange" size="lg" className="px-8">
            <Search className="mr-2 h-4 w-4" />
            SEARCH
          </Button>
        </div>
        
        <div className="text-right mt-4">
          <Button variant="link" className="text-muted-foreground text-sm">
            ADVANCE SEARCH ▼
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SearchFilters;