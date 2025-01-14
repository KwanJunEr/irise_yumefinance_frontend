import Sidebar from "@/components/Sidebar";


export default async function RootLayout({ children,
}: Readonly<{
  children: React.ReactNode;
}>){
    return(
        <main className="flex h-screen w-full ">
            <Sidebar/>
            <div >
                {children}
            </div>
        </main>
    )
}