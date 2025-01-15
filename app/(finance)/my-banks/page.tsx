"use client";
import BankCard from "@/components/BankCards";
import { Button } from "@/components/ui/button";
import { DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogTrigger, Dialog} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import React, { useState } from "react";

const MyBanks = () => {
    const [limit, setLimit] = useState(1200);
    const [currentUsage, setCurrentUsage] = useState(500);
    const [newLimit, setNewLimit] = useState(limit);
    const [showLimit, setshowLimit] = useState(false);
    const handleSetLimit = () => {
        setLimit(newLimit);
        setshowLimit(true)
      };
    
      const usagePercentage = (currentUsage / limit) * 100;
  return (
    <section className="min-h-screen w-full">
      <div className="px-10 py-5">
        <div className="flex flex-row justify-between">
          <div>
            <h1 className="text-2xl font-bold mb-2">My Bank Accounts</h1>
            <h2 className="text-lg font-semibold mt-1">
              Effortlessly Manage Your Spending Activities for Each Bank Account
            </h2>
          </div>{" "}
          <div className="py-5">
            <Dialog>
                <DialogTrigger asChild>
                    <Button>Set A Limit</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Set Spending Limit</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <label htmlFor="limit" className="text-right">
                      Limit (RM)
                    </label>
                    <Input
                      id="limit"
                      type="number"
                      value={newLimit}
                      onChange={(e) => setNewLimit(Number(e.target.value))}
                      className="col-span-3"
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button onClick={handleSetLimit}>Set Limit</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
            
          </div>
        </div>
        <div className="mt-10">
          <div>
            <h3 className="font-bold text-lg my-4">Your Cards</h3>
          </div>
          {/*Bank Cards*/}
          <div>
            <BankCard />
          </div>
          {showLimit && (
             <div className="mt-2">
            <h4 className="font-semibold mb-2">Spending Limit Progress</h4>
            <Progress value = {usagePercentage} className="w-[320px] h-4"/>
            <div className="flex justify-between mt-2">
              <span>Current Usage: RM{currentUsage} / RM{limit}</span>
              
            </div>
          </div>
          )}
         
        </div>
      </div>
    </section>
  );
};

export default MyBanks;
