import { Button } from "../../ui/button";

import {
  Card,
  CardFooter,
  CardContent,
  CardDescription,
  CardTitle,
  CardHeader,
} from "../../ui/card";
import { Tabs, TabsContent } from "../../ui/tabs";
import { Badge } from "../../ui/badge";
import DataFrame from "../data/DataFrame";
import DataField from "../data/DataField";
import { Input } from "../../ui/input";
import { useMemo } from "react";

function PageLayout({
  name,
  children,
}: {
  name: string;
  children: React.ReactNode | React.ReactNode[];
}) {
  return (
    <Tabs defaultValue="all">
      <TabsContent value="all">
        <Card x-chunk="dashboard-06-chunk-0">
          <CardHeader>
            <CardTitle className=" capitalize">{name}</CardTitle>
            <CardDescription>
              Manage your products and view their sales performance.
              <div className=" mt-5 flex items-center justify-between">
                <div className=" flex gap-3">
                  <Input
                    className="  max-w-64"
                    placeholder={`Search ${name}`}
                  />
                  <Button>Search</Button>
                </div>

                <div>
                  <Button>
                    Add <span className=" capitalize">{" " + name}</span>
                  </Button>
                </div>
              </div>
            </CardDescription>
          </CardHeader>
          <CardContent>{children}</CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}

export default PageLayout;
