"use client";

import React, { useState } from "react";
import { Gift, Award, Ticket, AlertCircle, Star, ShoppingCart, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { LucideIcon } from "lucide-react";

interface RewardItem {
  id: number;
  type: 'Coupon' | 'Badge' | 'Event' | 'Gift';
  name: string;
  cost: number;
  icon: LucideIcon;
  image: string;
}

type RewardsArray = RewardItem[];

const rewardItems: RewardsArray = [
  { id: 1, type: "Coupon", name: "10% Off Next Purchase", cost: 500, icon: Gift , image: "https://plus.unsplash.com/premium_photo-1670509045675-af9f249b1bbe?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y291cG9ufGVufDB8fDB8fHww" },
  { id: 2, type: "Badge", name: "Super Saver", cost: 1000, icon: Award , image:"https://images.unsplash.com/photo-1528260249572-a56fc30084ef?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFkZ2V8ZW58MHx8MHx8fDA%3D"},
  { id: 3, type: "Event", name: "VIP Shopping Night", cost: 2000, icon: Ticket , image:"https://plus.unsplash.com/premium_photo-1710147459819-eb44124ee66f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZXZlbnQlMjB0aWNrZXR8ZW58MHx8MHx8fDA%3D"},
  { id: 4, type: "Coupon", name: "Free Shipping", cost: 700, icon: ShoppingCart, image:"https://images.unsplash.com/photo-1617992477211-dfab5866182b?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y291cG9ufGVufDB8fDB8fHww" },
  { id: 5, type: "Gift", name: "Mystery Box", cost: 1500, icon: Star, image:"https://images.unsplash.com/photo-1512909006721-3d6018887383?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z2lmdCd8ZW58MHx8MHx8fDA%3D" },
  { id: 6, type: "Badge", name: "Top Contributor", cost: 2500, icon: Heart, image:"https://images.unsplash.com/photo-1528260249572-a56fc30084ef?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFkZ2V8ZW58MHx8MHx8fDA%3D" },
];

const Reward = () => {
  const [userPoints, setUserPoints] = useState<number>(5000);
  const [selectedReward, setSelectedReward] = useState<RewardItem | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const { toast } = useToast();

  const handleExchange = () => {
    if (selectedReward) {
      if (userPoints >= selectedReward.cost) {
        setUserPoints(userPoints - selectedReward.cost);
        toast({
          title: "Reward Exchanged!",
          description: `You've successfully exchanged for ${selectedReward.name}.`,
        });
      } else {
        toast({
          title: "Insufficient Points",
          description: "You don't have enough points for this reward.",
          variant: "destructive",
        });
      }
      setIsDialogOpen(false);
      setSelectedReward(null);
    }
  };

  const handleDialogOpen = (reward: RewardItem) => {
    setSelectedReward(reward);
    setIsDialogOpen(true);
  };

  const handleDialogClose = () => {
    setIsDialogOpen(false);
    setSelectedReward(null);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">Rewards Center</h1>
      <div className="bg-blue-100 p-4 rounded-lg mb-6">
        <p className="text-xl font-semibold text-blue-800">Your Points: {userPoints}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {rewardItems.map((item) => (
          <Card key={item.id} className="overflow-hidden">
            <CardHeader className="bg-blue-500 text-white">
              <CardTitle className="flex items-center">
                <item.icon className="mr-2" />
                {item.name}
              </CardTitle>
              <CardDescription className="text-blue-100">{item.type}</CardDescription>
            </CardHeader>
            <CardContent className="pt-4">
              <img src = {item.image}  className="w-full h-40 object-cover rounded-md mb-4"/>
              <p className="text-lg font-semibold text-blue-600">{item.cost} Points</p>
            </CardContent>
            <CardFooter>
              <Button
                className="w-full"
                onClick={() => handleDialogOpen(item)}
              >
                Exchange
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Exchange Confirmation</DialogTitle>
            <DialogDescription>
              {selectedReward && `Are you sure you want to exchange ${selectedReward.cost} points for ${selectedReward.name}?`}
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={handleDialogClose}>Cancel</Button>
            <Button onClick={handleExchange}>Confirm Exchange</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Reward;