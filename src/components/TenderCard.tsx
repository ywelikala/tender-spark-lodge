import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface TenderCardProps {
  title: string;
  category: string;
  source: string;
  location: string;
  publishedDate: string;
  closingDate: string;
  referenceNo: string;
  isToday?: boolean;
}

const TenderCard = ({
  title,
  category,
  source,
  location,
  publishedDate,
  closingDate,
  referenceNo,
  isToday = false,
}: TenderCardProps) => {
  const daysLeft = Math.ceil((new Date(closingDate).getTime() - new Date().getTime()) / (1000 * 3600 * 24));

  return (
    <Card className="hover:shadow-lg transition-shadow duration-300">
      <CardHeader className="pb-4">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-semibold text-primary hover:text-tender-orange cursor-pointer line-clamp-2">
            {title}
          </h3>
          {isToday && (
            <Badge className="bg-tender-orange text-accent-foreground">
              Today's Tender
            </Badge>
          )}
        </div>
      </CardHeader>
      
      <CardContent className="space-y-3">
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <span className="font-medium text-muted-foreground">Category:</span>
            <p className="text-tender-orange">{category}</p>
          </div>
          <div>
            <span className="font-medium text-muted-foreground">Source:</span>
            <p className="text-tender-orange cursor-pointer hover:underline">{source}</p>
          </div>
          <div>
            <span className="font-medium text-muted-foreground">Location:</span>
            <p>{location}</p>
          </div>
          <div>
            <span className="font-medium text-muted-foreground">Published Date:</span>
            <p className="text-tender-orange cursor-pointer hover:underline">{publishedDate}</p>
          </div>
          <div>
            <span className="font-medium text-muted-foreground">Closing Date:</span>
            <p>{closingDate}</p>
          </div>
          <div>
            <span className="font-medium text-muted-foreground">Reference No:</span>
            <p>{referenceNo}</p>
          </div>
        </div>

        <div className="flex justify-between items-center pt-4 border-t">
          <div className="text-right">
            <p className="text-sm text-muted-foreground">Tender Closing in:</p>
            <p className="font-semibold text-primary">{daysLeft} Days</p>
          </div>
          <Button variant="default" size="sm">
            Click to View
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default TenderCard;