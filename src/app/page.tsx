/* eslint-disable @next/next/no-img-element */
import { MainFooter } from "@/components/Footers/Mainfooter";
import { CardFinancialDetail } from "@/components/cards/CardFinancialDetail";
import { CardMessages } from "@/components/cards/CardMessages";
import { CardPosts } from "@/components/cards/CardPosts";
import { Cardrevenue } from "@/components/cards/CardRevenue";
import { CardSales } from "@/components/cards/CardSales";
import { CardSupportTickets } from "@/components/cards/CardSupportTickets";
import { CardTable } from "@/components/cards/CardTables";
import { ContentPageHeader } from "@/components/headers/ContentPageHeader";
import { MainHeader } from "@/components/headers/Mainheader";
import { SidebarContent } from "@/components/sidebar/SidebarContent";
import { SidebarHeader } from "@/components/sidebar/SidebarHeader";
import { SidebarNotification } from "@/components/sidebar/SidebarNotification";
import { StatisticNumberOne } from "@/components/statistics/StatisticNumberOne";
import { StatisticNumberTwo } from "@/components/statistics/StatisticNumberTwo";

export default function Home() {
  return (
    <>
      <MainHeader />
      <div className="page-content">
        <div className="sidebar sidebar-dark sidebar-main sidebar-expand-lg">
          <div className="sidebar-content">
            <SidebarHeader />
            <SidebarContent />
          </div>
        </div>
        <div className="content-wrapper">
          <div className="content-inner">
            <ContentPageHeader />
            <div className="content">
              {/* <div className="row">
                <StatisticNumberOne />
                <StatisticNumberTwo />
              </div> */}
              <div className="row">
                <div className="col-xl-8">
                  <CardTable />
                  {/* <Cardrevenue />
                  <CardSupportTickets />
                  <CardPosts /> */}
                </div>
                <div className="col-xl-4">
                  <CardSales />
                  {/* <CardMessages />
                  <CardFinancialDetail /> */}
                </div>
              </div>
            </div>
            <MainFooter />
          </div>
        </div>
      </div>
      <SidebarNotification />
    </>
  );
}
