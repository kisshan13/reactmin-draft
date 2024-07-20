import { useResourceEntity } from "../resource/useResourceEntity";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Input } from "../ui/input";
import { Tabs, TabsContent } from "../ui/tabs";

function DefaultPage({
  children,
}: {
  children: React.ReactNode | React.ReactNode[];
}) {
  const pageInfo = useResourceEntity();

  return (
    <Tabs defaultValue="all">
      <TabsContent value="all">
        <Card x-chunk="dashboard-06-chunk-0">
          <CardHeader>
            <CardTitle className=" capitalize">{pageInfo.title}</CardTitle>
            <CardDescription>
              {/* Manage your products and view their sales performance. */}
              {pageInfo.description}
              <div className=" mt-5 flex items-center justify-between">
                <div className=" flex gap-3">
                  <Input
                    className="  max-w-64"
                    placeholder={`Search ${pageInfo.title}`}
                  />
                  <Button>Search</Button>
                </div>

                <div>
                  <Button>
                    Add{" "}
                    <span className=" capitalize">{" " + pageInfo.title}</span>
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

export default DefaultPage;
