export default function Footer(){
    return (
        <footer className="bg-[#f8f9fa] p-4">
          <div className="container mx-auto grid grid-cols-2 gap-8 max-w-7xl px-10">
            <div>
              <h3 className="font-bold">TRADE GENERAL</h3>
              <ul className="space-y-1 text-sm">
                <li>Crude Oil</li>
                <li>Refined Product & Energy</li>
                <li>Bulk Materials</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold">PROJECTS</h3>
              <ul className="space-y-1 text-sm">
                <li>Petro Chemicals</li>
                <li>Steel</li>
                <li>Power</li>
                <li>Private Equity</li>
                <li>Oil, Gas & Energy</li>
                <li>Power</li>
                <li>ICT & Telecommunications</li>
                <li>Technology Development</li>
                <li>Consumer Market</li>
                <li>Healthcare</li>
              </ul>
            </div>
          </div>
          <div className="text-center text-sm py-4 max-w-7xl mx-auto">© 2023 by Penta Bay Co.,LTD</div>
        </footer>
    )
}