/*
  =====================================================================
  PORTFOLIO DATA — the only file you normally need to edit.
  =====================================================================
  PROFILE   → your name, links, bio, experience
  FEATURED  → the 4 projects on the home page, in this order (by slug)
  PROJECTS  → every project. Fields:
    slug         url id → case-study.html?p=<slug>
    title, short (short name), type, domain, year, status
    summary      one-line introduction
    problem      the problem it solves (1–2 sentences)
    outcomes     2–4 short points shown on the home page showcase
    poster       thumbnail image
    video        { src, poster, length, caption }  (optional)
    demo         { src, poster, length, caption }  (optional longer video for the case study)
    repo / live  links (leave "" when private / not live)
    cs           the case study (sections are rendered in order; any can be left out)
  Section types: text, issues, flow, features, roles, decisions, metrics,
                 table, screens, timeline, list
*/

window.PROFILE = {
  name: "Adnan Hakimuddin",
  location: "Karachi, Pakistan",
  email: "adnanhakimuddin12@gmail.com",
  phone: "+92 332 8265515",
  whatsapp: "https://wa.me/923328265515",
  github: "https://github.com/AdnanHakimuddin",
  linkedin: "https://www.linkedin.com/in/adnanhakimuddin/",
  experience: [
    { when: "2026 — now", role: "Founder", org: "Independent practice",
      text: "Designing and building complete business systems for clients — ERP, point of sale, logistics, property and production tracking — from the first workflow conversation to deployment." },
    { when: "Jul 2024 — Jun 2026", role: "Tech Lead", org: "Meri Gari Pvt Ltd",
      text: "Designed and implemented ERP solutions that improved operational efficiency across the business. Led development of the Meri Gari app end to end, gathered requirements with cross-functional teams, and mentored junior developers through code reviews and testing." },
    { when: "Jun 2022 — Mar 2024", role: "Senior Software Engineer", org: "Zaraye",
      text: "Led development of ERP modules for ledgers, payables and receivables. Built secure, versioned APIs, real-time features, and dynamic, API-driven forms for flexible business logic." },
    { when: "Jan 2018 — Jun 2021", role: "Developer", org: "NopCommerce",
      text: "Built and maintained web applications, optimized database design and queries for scale, and worked in a fully agile team — sprint planning, stand-ups and iterative delivery." }
  ]
};

window.FEATURED = ["onedesk-erp", "byteaxistech", "sms-logistics-erp", "happy-pizza-pos"];

window.PROJECTS = [
  /* ------------------------------------------------------------------ */
  {
    slug: "onedesk-erp",
    title: "OneDesk ERP",
    short: "OneDesk ERP",
    type: "Business system",
    domain: "ERP & accounting",
    year: 2026,
    status: "Product",
    summary: "Shop management and ERP for trading and supply businesses — sales, purchasing, stock, accounts, payroll and tax in one system.",
    problem: "Invoices in one tool, stock in a register, customer credit in a notebook. The same details get written again at every step, and at month-end nothing agrees.",
    outcomes: [
      "A quotation becomes the invoice, the payment clears it, the ledger balances — no line retyped",
      "Customer balance and credit limit visible on every document",
      "Invoices and ledger statements sent on WhatsApp in one click",
      "GST, withholding tax and FBR fields built in"
    ],
    poster: "videos/onedesk-erp.jpg",
    video: { src: "videos/onedesk-erp.mp4", poster: "videos/onedesk-erp.jpg", length: "4:07", caption: "Full walkthrough: items, customers, quotation to invoice, WhatsApp, receipt voucher, ledger, reports and permissions." },
    repo: "", live: "",
    cs: {
      headline: "Sales, stock and khata in one place",
      intro: "OneDesk ERP runs a trading business's whole day in one system: from the first quotation to the payment received, the stock on the shelf and the balance sheet. Each document creates the next, so nothing is typed twice.",
      meta: [["Type", "Business ERP (web app)"], ["Made for", "Trading, supply & distribution businesses"], ["Built by", "Adnan Hakimuddin"], ["Local fit", "PKR, GST 18%, WHT, FBR fields, JazzCash"]],
      sections: [
        { type: "issues", id: "problem", nav: "Problem", title: "One business, too many registers",
          lede: "Small and mid-sized businesses often split their records across tools and paper. Each split is a place where the same detail is typed again — and where errors start.",
          items: [
            ["Documents made separately", "Quotations, invoices and delivery challans prepared one by one, with the same items and prices copied each time."],
            ["Credit tracked by hand", "Customer udhaar and part-payments kept in a khata, reconciled only when a customer disputes a balance."],
            ["Stock seen too late", "Stock value and low stock discovered at a physical count, not when it happens."],
            ["Tax as a separate job", "GST and withholding tax records rebuilt from invoices at filing time."]
          ] },
        { type: "flow", id: "flow", nav: "The flow", title: "From quotation to ledger, one chain",
          lede: "The demo follows one customer, Al-Madina Store, through a complete sale.",
          nodes: [
            ["Quotation", "OD-QT-000002", "Two items, GST 18%: net 37,052.00"],
            ["Sales invoice", "OD-INV-000018", "Loaded from the quotation; 20,000 received in cash"],
            ["WhatsApp", "Message ready", "Invoice summary sent to the customer"],
            ["Receipt voucher", "OD-RV-000004", "17,052.00 received in JazzCash, applied to the invoice"],
            ["Party ledger", "Closing 0.00", "Debits and credits balance; statement shareable on WhatsApp"]
          ] },
        { type: "features", id: "modules", nav: "Modules", title: "What's inside",
          items: [
            ["Sales", "Quotations, proforma invoices, sales orders, delivery challans, invoices, returns, customers, field order booking and POS."],
            ["Purchasing", "Requests for quotation, purchase orders, goods receipts, purchase invoices, returns and suppliers."],
            ["Inventory", "Items with SKU, barcode and HS code; categories and units; stock adjustments; low-stock alerts; batch and expiry."],
            ["Manufacturing", "Bills of materials and production orders, with a production and wastage report."],
            ["Accounting", "Receipt, payment and journal vouchers, chart of accounts, day book, trial balance, profit & loss and balance sheet."],
            ["HR & payroll", "Employees, attendance, payroll and advances, sales targets and commission."],
            ["Tax", "Sales tax (GST) report, withholding tax sections, NTN / STRN fields and a cheque / PDC register."],
            ["Users & roles", "Per-screen permissions for each role — view, add, edit, delete — and an activity log."]
          ] },
        { type: "screens", id: "screens", nav: "Screens", title: "Inside the product",
          items: [
            ["case-studies/onedesk-erp/dashboard.jpg", "Dashboard: sales, purchases, receivables, payables, stock value, net profit, and cash and bank at a glance."],
            ["case-studies/onedesk-erp/quotation.jpg", "Quotation: convert to a proforma, sales order or invoice in one click."],
            ["case-studies/onedesk-erp/sales-invoice.jpg", "Sales invoice: cash or credit, partial payment and payment mode."],
            ["case-studies/onedesk-erp/whatsapp.jpg", "Invoice summary ready to send on WhatsApp."],
            ["case-studies/onedesk-erp/invoice-print.jpg", "Printable invoice with the linked quotation and balance due."],
            ["case-studies/onedesk-erp/ledger.jpg", "Party ledger: invoice, payments and closing balance."],
            ["case-studies/onedesk-erp/stock-report.jpg", "Stock report: average cost, value, and low stock flagged in red."],
            ["case-studies/onedesk-erp/profit-loss.jpg", "Profit & loss: expenses and net profit."],
            ["case-studies/onedesk-erp/roles.jpg", "Roles & permissions: different access for every screen."]
          ] }
      ]
    }
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "sms-logistics-erp",
    title: "SMS Logistics ERP",
    short: "SMS Logistics",
    type: "Business system",
    domain: "Transport & logistics",
    year: 2026,
    status: "Demo system",
    summary: "A transport and logistics ERP that follows each job from booking to the final accounting entry.",
    problem: "Jobs, trip programs, delivery documents and bills lived in separate registers. Container numbers were retyped at every desk, and mistakes surfaced only at billing.",
    outcomes: [
      "Container details entered once and carried forward",
      "A bill can only be raised from a verified delivery document",
      "Each delivery document can be billed only once",
      "Posting a bill creates its accounting voucher automatically"
    ],
    poster: "case-studies/sms-logistics/pod-eir.jpg",
    repo: "", live: "",
    cs: {
      headline: "From jobs to billing, one connected workflow",
      intro: "SMS Logistics ERP follows a transport job from booking to the final accounting entry. Each register builds on the one before it, so details are entered once and every bill can be traced back to the delivery behind it.",
      meta: [["Type", "Transport & logistics ERP"], ["Made for", "Transporters and container movement"], ["Built by", "Adnan Hakimuddin"], ["Status", "Demo system"]],
      sections: [
        { type: "issues", id: "problem", nav: "Problem", title: "The same details, typed at every desk",
          lede: "Following one job from booking to billing showed the container number being typed at three different desks.",
          items: [
            ["Booking", "Jobs entered in a spreadsheet."],
            ["Operations", "Truck and driver assigned over phone and messages — details retyped."],
            ["Driver", "Proof of delivery returned on paper."],
            ["Billing", "Bill typed from the paper copy — details retyped again."],
            ["Accounts", "Bill entered a third time into the books."]
          ] },
        { type: "text", id: "root-cause", nav: "Root cause", title: "Nothing connected a delivery to its bill",
          body: ["Wrong bills were the symptom, not the problem. The cause was that every department kept its own register, so billing could never see the delivery record it was billing for.", "Adding another person to check every bill would only hide the problem. The real fix was to remove the retyping, so the error could not be made in the first place."] },
        { type: "flow", id: "flow", nav: "Architecture", title: "Five linked registers",
          lede: "Each record is created from the one before it. One job, JOB-2417, is followed through the system.",
          nodes: [
            ["Job", "JOB-2417", "Customer, route and containers — entered once"],
            ["Program", "PRG-3308", "Vehicle, driver and trip date added by operations"],
            ["POD / EIR", "POD-5121", "Delivery recorded against the trip, then verified"],
            ["Bill", "INV-0918", "Raised only from the verified POD"],
            ["Voucher", "JV-1204", "Posted automatically from the bill"]
          ] },
        { type: "decisions", id: "rules", nav: "Business rules", title: "Rules that live in the code",
          lede: "The design turns the process into a small set of rules the software enforces, instead of relying on someone remembering them on a busy day.",
          items: [
            ["Enter once", "Container details are entered on the program and carried forward to the POD, bill and voucher. They are never typed from paper."],
            ["Verified first", "A bill line can only be created from a POD / EIR that has been verified."],
            ["Billed once", "A delivery document can be billed one time only; a second attempt is refused."],
            ["Automatic posting", "Posting a bill creates its accounting voucher, so accounts reviews entries instead of entering them again."]
          ] },
        { type: "screens", id: "walkthrough", nav: "Walkthrough", title: "Following JOB-2417 through the system",
          lede: "Illustrative interface with sample data, showing how one job moves through each register.",
          items: [
            ["case-studies/sms-logistics/job.jpg", "Job register: customer, route and containers entered once."],
            ["case-studies/sms-logistics/program.jpg", "Program register: operations add only the vehicle, driver and trip."],
            ["case-studies/sms-logistics/pod-eir.jpg", "POD / EIR register: the container number is carried forward; a verified document is what billing works from."],
            ["case-studies/sms-logistics/bill.jpg", "Bill register: each bill points to its delivery document; a job without a POD can't be billed yet."],
            ["case-studies/sms-logistics/accounts.jpg", "Accounts: posting the bill creates the voucher."]
          ] }
      ]
    }
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "happy-pizza-pos",
    title: "Happy Pizza POS",
    short: "Happy Pizza POS",
    type: "Business system",
    domain: "Point of sale",
    year: 2026,
    status: "Client project",
    summary: "A restaurant point of sale that runs the whole back office, not just the till — recipe-based stock, month-end reconciliation and reporting.",
    problem: "Billing software, notebooks and a monthly spreadsheet that never agreed. Stock went missing between sales and the shelf, and the sales report froze as history grew.",
    outcomes: [
      "Every sale deducts ingredients through its recipe",
      "Sales screen load cut from 31 seconds to about 2, on 5,123 real sales",
      "Physical counts correct live stock and become next month's opening",
      "Separate admin and cashier interfaces, by design"
    ],
    poster: "videos/happy-pizza.jpg",
    video: { src: "videos/happy-pizza-demo.mp4", poster: "videos/happy-pizza.jpg", length: "1:10", caption: "Dashboard, fast order entry, delivery address auto-fill, receipts, raw-material inventory, production batches and the cashier view." },
    repo: "", live: "",
    cs: {
      headline: "From paper ledgers to a complete restaurant system",
      intro: "How one owner's daily frustrations with billing, stock and reporting became a point-of-sale system that runs the whole back office, not just the till.",
      meta: [["Role", "Product, design & full-stack development"], ["Timeline", "Aug – Oct 2026"], ["Deployment", "Single-PC desktop, no internet needed"], ["Client", "Happy Pizza"]],
      sections: [
        { type: "metrics", id: "outcomes", nav: "Outcomes", title: "What changed",
          lede: "Measured on a real restaurant's sales history during development, not estimated.",
          items: [
            ["31s → 2s", "Sales screen load time", "With 5,123 real sales in the database, measured click-to-render"],
            ["100×", "Smaller sales data payload", "3.09 MB reduced to 31 KB per page of results"],
            ["70", "Raw materials reconciled", "Each one tracked from purchase through recipe to sale"],
            ["2", "Separate role interfaces", "Full admin control and a restricted cashier till"]
          ] },
        { type: "issues", id: "problem", nav: "Problem", title: "What the owner was dealing with",
          lede: "The business was running on a mix of billing software, notebooks and a monthly spreadsheet. Each piece worked on its own. None of them agreed with each other.",
          items: [
            ["Stock didn't match what was sold", "Ingredients disappeared between sales and the shelf, with no way to tell whether the cause was waste, miscounts, or recipes not being followed."],
            ["Month-end stock was manual and error-prone", "Opening stock, purchases, consumption and closing were tracked in a spreadsheet by hand. One mistake carried into the next month."],
            ["Delivery customers were re-entered every order", "Repeat customers' addresses were typed again each time, slowing the counter and introducing typos."],
            ["Aggregator orders were hard to separate", "Food Panda sales blended into walk-in and phone orders, so their real contribution was never clear."],
            ["Staff could see everything", "Any login could reach reports, costs and settings."],
            ["Reports slowed to a crawl", "As sales history grew, the sales report took long enough to freeze the screen."]
          ] },
        { type: "list", id: "research", nav: "Research", title: "How the problem was understood",
          lede: "The strongest research input was the owner's own month-end spreadsheet, which had already been refined over real use.",
          columns: [
            ["What the spreadsheet showed", ["36 ingredients grouped into 7 categories", "A consistent formula: Opening + Purchased − Consumed = Expected", "Variance measured against a physical count, in quantity and in rupees", "Used as the functional blueprint for the Stock Reconciliation screen"]],
            ["What the conversations added", ["Save a physical count and have it become next month's starting point", "A repeated question: \"Is my stock going down when I sell, or is it being left behind?\"", "Cashiers should not see margins, costs or the back office"]]
          ] },
        { type: "roles", id: "audience", nav: "Who it's for", title: "Who this is for",
          lede: "Owner-operated restaurants and quick-service outlets that make some of their own food and sell through both walk-in counters and delivery.",
          head: ["Person", "What they care about", "What the system gives them"],
          rows: [
            ["Owner / manager", "Knowing where money and stock actually went, without evenings on spreadsheets", "Dashboard, Sales Report, Stock Reconciliation, Recipe Check"],
            ["Cashier", "A fast, uncluttered till that doesn't let them make mistakes with stock or money", "POS with auto-filled delivery addresses; their own sales history only"],
            ["Kitchen / stock keeper", "Knowing what's low and logging what was cooked", "Inventory levels and production batch logging"]
          ] },
        { type: "roles", id: "market", nav: "Market", title: "Market context",
          lede: "Most restaurant software tackles either billing or inventory. The gap this product targets is the link between the two.",
          head: ["Category", "How they usually work", "Where they fall short for this audience"],
          rows: [
            ["Cloud POS platforms", "Subscription, usually cloud-based, strong on billing", "Stock is often a separate module or add-on; recipe-based deduction is limited"],
            ["Local billing software", "One-time or low-cost, runs on the shop PC", "Typically billing only; no ingredient-level stock or reconciliation"],
            ["Spreadsheets & registers", "Free and familiar", "No automation, no link between sales and stock, error-prone at month-end"]
          ] },
        { type: "flow", id: "architecture", nav: "Architecture", title: "Every sale is a stock event",
          lede: "Every stock figure traces back to a purchase, a recipe or a count. The screens follow that chain.",
          nodes: [
            ["Purchase", "Raw materials in", "Stock increases at cost"],
            ["Production", "Batches", "Sauces and in-house items made from ingredients"],
            ["Sale", "Recipe deduction", "Ingredients deducted in base units, in the same transaction"],
            ["Recipe check", "Gaps surfaced", "Products without recipes, sales that deducted nothing"],
            ["Reconciliation", "Physical count", "Corrects live stock and becomes next month's opening"]
          ] },
        { type: "features", id: "solution", nav: "Solution", title: "One system, two interfaces",
          items: [
            ["Recipe-driven stock", "Selling a product deducts exactly the ingredients its recipe calls for, converted to base units, in the same transaction as the sale."],
            ["Stock reconciliation", "Expected closing is calculated from opening, purchases and consumption. The owner types the physical count, and saving corrects live stock."],
            ["Production batches", "In-house items like sauces are logged as batches. Ingredients go down and the made item goes up in one step, with cost derived from the recipe."],
            ["Recipe check", "Flags products with no recipe, and sales that didn't deduct any stock, so gaps surface before they become losses."],
            ["Delivery & Food Panda", "Repeat customers' addresses auto-fill. Aggregator orders are tagged separately so their contribution is visible."],
            ["Role-based access", "Admins see everything. Cashiers see only the till and their own sales — by design rather than by hiding menus."]
          ] },
        { type: "decisions", id: "decisions", nav: "Key decisions", title: "Engineering decisions",
          items: [
            ["Paginate on the server", "The sales screen took 31 seconds to load 5,123 sales. It was rebuilt with server-side pagination: about 1–2 seconds, and a 31 KB payload instead of 3.09 MB."],
            ["Run on one PC, offline", "An embedded database on the shop PC — no monthly internet dependency at the counter."],
            ["Separate interfaces, not hidden menus", "The cashier login has two screens: POS and My Sales. Nothing else in the back office is reachable from it."],
            ["Use the owner's spreadsheet as the spec", "The month-end spreadsheet already encoded the owner's formula, so it became the blueprint for Stock Reconciliation."]
          ] },
        { type: "table", id: "results", nav: "Results", title: "What the numbers show",
          lede: "Measured during development against a real sales history.",
          head: ["Measure", "Before", "After"],
          rows: [
            ["Sales screen load, 5,123 sales", "31.1 s", "about 1–2 s"],
            ["Click response on a sales row", "2.2 s", "168 ms"],
            ["Sales page API payload", "3.09 MB", "31 KB"],
            ["Sales page API response time", "1.4 s", "about 0.1 s"]
          ] },
        { type: "screens", id: "admin", nav: "Admin screens", title: "The admin interface",
          lede: "The owner's view: overview first, then catalog, parties, transactions, reports and settings.",
          ratio: "5/3",
          items: [
            ["case-studies/happy-pizza/img/admin-dashboard.jpg", "Dashboard: sales, purchases, receivables, payables and inventory value at the start of the day."],
            ["case-studies/happy-pizza/img/admin-pos.jpg", "POS: category, product, size, then cart."],
            ["case-studies/happy-pizza/img/admin-sales.jpg", "Sales: every sale, expandable to its line items, paginated so long histories stay responsive."],
            ["case-studies/happy-pizza/img/admin-inventory.jpg", "Inventory: current stock per raw material, with the history of every movement."],
            ["case-studies/happy-pizza/img/admin-reconciliation.jpg", "Stock reconciliation: opening, purchases, consumption and expected closing are calculated; the owner types only the physical count."],
            ["case-studies/happy-pizza/img/admin-sales-report.jpg", "Sales report: filter by date, customer, cashier, product and payment; export to Excel and PDF."],
            ["case-studies/happy-pizza/img/admin-recipe-check.jpg", "Recipe check: products without recipes, and sales that didn't deduct stock."],
            ["case-studies/happy-pizza/img/admin-users.jpg", "Users: accounts and roles, each given only the access it needs."]
          ] },
        { type: "screens", id: "cashier", nav: "Cashier screens", title: "The cashier interface",
          lede: "A deliberately small surface: ring up a sale and review your own sales, nothing else.",
          ratio: "5/3",
          items: [
            ["case-studies/happy-pizza/img/cashier-pos.jpg", "POS: order type is Takeaway, Delivery or Food Panda."],
            ["case-studies/happy-pizza/img/cashier-my-sales.jpg", "My Sales: the cashier's own transactions only, for checking a shift."]
          ] },
        { type: "timeline", id: "journey", nav: "Journey", title: "How the project came together",
          lede: "Built iteratively against real use, with each release answering a problem the previous one exposed.",
          items: [
            ["Aug 2026", "Foundations and the first working till", ["Core catalog: categories, products, variants, measurement units", "Raw materials, recipes, and sales with stock deduction"]],
            ["26 Aug 2026", "Placed under version control", ["Private repository with the first full commit"]],
            ["1 Oct 2026", "Aggregator orders, speed and reporting detail", ["Food Panda order type with icon-based switching at the till", "Sales screen rebuilt with server-side pagination after the 31-second load was measured", "Unused production batches can be deleted, reversing stock exactly", "Delivery address in the Sales Report, on screen and in Excel and PDF", "Address search in the POS customer picker"]],
            ["2 Oct 2026", "Month-end reconciliation and recipe checking", ["Stock Reconciliation: physical counts correct live stock and become the next opening", "Recipe Check: products with missing recipes or unrecorded deductions", "Produced items show a cost derived from their recipe"]]
          ] },
        { type: "list", id: "next", nav: "What's next", title: "Trade-offs and what comes next",
          columns: [
            ["Trade-offs, honestly", ["Single-location design today; multi-branch is not built", "Food Panda integration depends on partner API access", "Built for this owner's workflow first; generalising takes further work"]],
            ["Next", ["Automatic order import from Food Panda, once API access is available", "Recipe-derived cost across sales and purchase reports, for margin per product", "A read-only mobile dashboard for the owner — not started"]]
          ] }
      ]
    }
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "building-management-system",
    title: "Building Management System",
    short: "Building Management",
    type: "Business system",
    domain: "Property management",
    year: 2026,
    status: "Product",
    summary: "One platform for a building and every role in it — maintenance charges, payments, complaints, expenses and emergency alerts.",
    problem: "Charges in a register, payments verified by hand, complaints lost in phone calls, emergency notices that never reach every flat — and every staff member able to see everything.",
    outcomes: [
      "A portal for management and a phone view for owners and residents",
      "Complaints tracked from raised to resolved, live",
      "Emergency alerts with acknowledgement counts",
      "Access enforced at the page, not just hidden menus"
    ],
    poster: "case-studies/bms/dashboard.jpg",
    video: { src: "videos/bms-highlight.mp4", poster: "case-studies/bms/dashboard.jpg", length: "0:41", caption: "Highlights: management dashboard, the owner's phone view, and live complaints." },
    demo: { src: "videos/bms-demo.mp4", poster: "case-studies/bms/dashboard.jpg", length: "2:33", caption: "Full demo across every role: manager, accountant, super admin, owner and resident." },
    repo: "", live: "",
    cs: {
      headline: "One connected platform for a building and every role in it",
      intro: "Running a building means maintenance charges, payment verification, resident complaints, expenses and emergency announcements — usually scattered across registers, spreadsheets and phone calls. This system brings them into one place: a portal for management, and a phone-friendly view for owners and residents.",
      meta: [["Type", "Property management web app"], ["Made for", "Building management, owners & residents"], ["Built by", "Adnan Hakimuddin"], ["Roles", "Super admin, manager, accountant, owner, resident"]],
      sections: [
        { type: "issues", id: "problem", nav: "Problem", title: "Building operations, scattered",
          items: [
            ["Charges on paper", "Maintenance charges per flat, and who has paid, kept in a register or spreadsheet."],
            ["Verification by hand", "Payments checked and outstanding balances worked out manually."],
            ["Complaints lost", "Resident complaints arrive by phone and WhatsApp, with no record of who is handling them."],
            ["Alerts that don't reach", "Emergency notices are hard to get to every resident, and there's no way to know who saw them."],
            ["No access control", "Every staff member can see every figure."]
          ] },
        { type: "roles", id: "roles", nav: "Roles", title: "A different experience for every role",
          head: ["Role", "What they do in the system"],
          rows: [
            ["Manager", "Dashboard, complaints, emergency alerts and day-to-day building work"],
            ["Accountant", "Payments, expenses and financial reports — no access to administration"],
            ["Super admin", "Full control over users, roles and permissions"],
            ["Owner / resident", "Their own flat on their phone: monthly charges, outstanding balance, payment submission, complaints and announcements"]
          ] },
        { type: "features", id: "features", nav: "Features", title: "What's inside",
          items: [
            ["Dashboard", "Outstanding, collected, occupied flats, payments awaiting verification and a 'needs your attention' list, with a collected-vs-expenses chart."],
            ["Buildings & flats", "Buildings, floors, flats, owners and tenants in one record."],
            ["Maintenance & payments", "Monthly maintenance charges, payment submission, verification and receipts."],
            ["Expenses", "Expenses, recurring expenses and vendors."],
            ["Complaints", "Open → assigned → in progress → resolved → closed, with assignment and a conversation thread."],
            ["Emergency alerts", "Alerts such as a fire drill go to every resident, with alert history and acknowledgement counts."],
            ["Reports", "Maintenance, expenses, financial and occupancy reports; CSV and PDF export."],
            ["Users & audit", "Users, roles and permissions, plus an audit log. Light and dark mode."]
          ] },
        { type: "decisions", id: "decisions", nav: "Key decisions", title: "Design decisions",
          items: [
            ["Enforce access at the page", "An accountant who opens an admin page by its address is refused — permissions are checked on the page itself, not just by hiding menu items."],
            ["A separate view for residents", "Owners and residents get a phone-first view built around their own flat, instead of a cut-down admin screen."],
            ["Show what needs attention", "The dashboard leads with work waiting — payments to verify, complaints not yet viewed, vacant flats — before charts."]
          ] },
        { type: "screens", id: "screens", nav: "Screens", title: "Inside the product",
          items: [
            ["case-studies/bms/dashboard.jpg", "Manager dashboard: outstanding, collection, occupancy and pending work."],
            ["case-studies/bms/complaint-detail.jpg", "Complaint detail: status, assignment and the conversation with the resident."],
            ["case-studies/bms/emergency-alert.jpg", "Sending an emergency alert, with alert history and acknowledgements."],
            ["case-studies/bms/dark-mode.jpg", "Dark mode."],
            ["case-studies/bms/financial-report.jpg", "Accountant's financial report: collected, expenses and net by month, with CSV and PDF export."],
            ["case-studies/bms/owner-home.jpg", "Owner's phone view: their flat, this month's charges and total outstanding."],
            ["case-studies/bms/owner-charges.jpg", "Month-by-month charges and payment history."],
            ["case-studies/bms/owner-complaints.jpg", "A resident's complaints and their live status."]
          ] }
      ]
    }
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "printplus",
    title: "PrintPlus System",
    short: "PrintPlus",
    type: "Business system",
    domain: "Production tracking",
    year: 2026,
    status: "Product",
    summary: "Job card and production tracking for print and signage shops — from the order desk through design, printing and finishing.",
    problem: "A print job passes through several departments. On paper, nobody can see which department a job is in, what's waiting, or whether the price on the sheet is right.",
    outcomes: [
      "Each job routed through the departments it needs, in order",
      "Every department works from its own queue",
      "Totals recalculated on the server on save",
      "Photo and remarks recorded at each step"
    ],
    poster: "case-studies/printing-plus/new-job-card-top.jpg",
    video: { src: "videos/printing-plus-demo.mp4", poster: "case-studies/printing-plus/new-job-card-top.jpg", length: "1:36", caption: "One job card, JC-000001, from creation through Graphic Design, Digital and Finishing to completed." },
    repo: "", live: "",
    cs: {
      headline: "Every job card, from the order desk to the finishing table",
      intro: "PrintPlus runs the jobs in a print and signage shop. The order desk opens a job card with the customer, specs and price, chooses the departments the job will pass through, and each department works from its own queue until the job is done.",
      meta: [["Type", "Job card & production tracking"], ["Made for", "Print, signage & production shops"], ["Built by", "Adnan Hakimuddin"], ["Roles", "Administrator, department users"]],
      sections: [
        { type: "issues", id: "problem", nav: "Problem", title: "A job is in three places at once",
          lede: "In a print shop one order moves through design, printing and finishing. When the job sheet lives on paper:",
          items: [
            ["Where is it?", "Nobody can see which department a job is in without walking the floor."],
            ["What's waiting?", "Each department finds out about new work when a sheet lands on the table."],
            ["Is the price right?", "Quantity, price, designing charges and discount are worked out by hand."],
            ["What was done?", "Proof of each step — a photo, a note — isn't kept with the job."]
          ] },
        { type: "flow", id: "flow", nav: "The flow", title: "One job card through the shop",
          lede: "From the demo: JC-000001, an illuminated storefront sign for Metro Signage Co.",
          nodes: [
            ["Job card", "JC-000001", "60×24, backlit acrylic letters; 850 + 150 designing = 1,000"],
            ["Graphic Design", "Design queue", "Design queue; remarks, photo, mark completed"],
            ["Digital", "Digital queue", "Arrives in the digital queue automatically"],
            ["Finishing", "Finishing queue", "Last department completes the job"],
            ["Completed", "Status: completed", "Status, department and totals visible to the admin"]
          ] },
        { type: "features", id: "features", nav: "Features", title: "What's inside",
          items: [
            ["Job cards", "Company, customer, order and needed-by dates, job name, size, specs, additional options and remarks. Save as draft or submit."],
            ["Department routing", "Pick the departments a job needs and put them in order; reorder with one click."],
            ["Pricing", "Quantity, price, designing charges and discount, with subtotal and grand total — recalculated on the server on save."],
            ["Department queues", "Each department user sees only the jobs waiting on their department, adds remarks and a photo, and marks their step complete."],
            ["Job tracking", "All job cards with filters for status, company, department and dates."],
            ["Dashboard", "Total job cards, new orders today, in progress, completed and drafts, with department-wise active jobs."],
            ["Companies & customers", "Add a new company or customer straight from the job card."],
            ["Users & roles", "Administrators and department users, with password changes from any screen."]
          ] },
        { type: "decisions", id: "decisions", nav: "Key decisions", title: "Design decisions",
          items: [
            ["Route per job, not per shop", "Not every job needs every department, so the route is chosen on the job card itself."],
            ["Queues, not a shared list", "A department user's home is their queue — only work that is waiting on them — instead of the whole job list."],
            ["The server owns the total", "The form shows live totals, but the final figures are recalculated on the server when the job is saved."]
          ] },
        { type: "screens", id: "screens", nav: "Screens", title: "Inside the product",
          items: [
            ["case-studies/printing-plus/dashboard.jpg", "Admin dashboard: totals and department-wise active jobs."],
            ["case-studies/printing-plus/new-job-card-top.jpg", "New job card: customer, order information, size and specs."],
            ["case-studies/printing-plus/new-job-card.jpg", "Departments in order, and pricing with subtotal, discount and grand total."],
            ["case-studies/printing-plus/job-cards.jpg", "Job cards: status, current department and totals, with filters."],
            ["case-studies/printing-plus/designer-queue.jpg", "Graphic Design queue: remarks, photo upload and mark as completed."],
            ["case-studies/printing-plus/digital-queue.jpg", "The same job arrives in the Digital queue as step 2."],
            ["case-studies/printing-plus/finishing-queue.jpg", "Finishing, the last step."]
          ] }
      ]
    }
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "byteaxistech",
    title: "ByteAxisTech Website",
    short: "ByteAxisTech",
    type: "Website",
    domain: "Company website",
    year: 2026,
    status: "Client project",
    summary: "A fast, 33-page website for a Karachi cybersecurity company that explains each service in plain language.",
    problem: "Cybersecurity services are hard to explain. The site had to make each one understandable, be found in search, and lead visitors to request an assessment — without inventing a single statistic.",
    outcomes: [
      "12 service pages, 5 industry pages and 4 resource articles",
      "Every page built for search",
      "Accessible forms with spam protection",
      "Statistics and case studies hidden until verified data exists"
    ],
    poster: "case-studies/byteaxistech/home.jpg",
    repo: "", live: "",
    cs: {
      headline: "A cybersecurity website that explains, not just sells",
      intro: "ByteAxisTech offers penetration testing, cloud security, SOC / MDR, incident response, compliance and data center work. The website had to explain each service in plain language and guide visitors towards requesting a security assessment.",
      meta: [["Type", "Multi-page company website"], ["Client", "ByteAxisTech, Karachi"], ["Built by", "Adnan Hakimuddin"], ["Pages", "33"]],
      sections: [
        { type: "list", id: "brief", nav: "Brief", title: "What was needed",
          columns: [
            ["Goals", ["A dedicated, searchable page for every service and industry", "Two clear paths: Contact, and Request a Security Assessment", "Fast and secure, with no server or database to maintain"]],
            ["Constraints", ["Only real content — no invented statistics, reviews or case studies", "Content the client can extend without a developer rebuilding pages", "Motion that respects visitors who prefer less of it"]]
          ] },
        { type: "flow", id: "architecture", nav: "Architecture", title: "Content in, pages out",
          lede: "Content lives in data files. Adding an entry produces the page, its place in menus, and its sitemap entry on the next build.",
          nodes: [
            ["Content", "Data files", "Services, industries, articles"],
            ["Templates", "One per page type", "Service, industry, article"],
            ["Build", "Static pages", "33 pages generated ahead of time"],
            ["Search", "Metadata", "Titles, canonical links, structured data, sitemap"],
            ["Hosting", "Static host", "Security headers and long-term caching"]
          ] },
        { type: "features", id: "solution", nav: "Solution", title: "How it was built",
          items: [
            ["Static by design", "Every page is generated ahead of time, so the site loads fast and there is very little to attack."],
            ["33 pages", "12 services, 5 industries, 4 resource articles, about, contact, assessment request, legal pages and a custom 404."],
            ["Search-ready", "Unique titles and descriptions, canonical links, social sharing tags and structured data on every page."],
            ["Forms", "Accessible validation messages, loading / success / failure states, a timeout and a hidden spam trap."],
            ["Motion", "Scroll animations that switch off for visitors who prefer reduced motion."],
            ["Security", "Security headers and caching rules set at the host."]
          ] },
        { type: "decisions", id: "decisions", nav: "Key decisions", title: "Decisions",
          items: [
            ["Hide what isn't verified", "Company statistics and case studies only appear once the client supplies verified data. Until then the sections stay hidden — empty or made-up numbers never go live."],
            ["No backend", "A static site meets every requirement and removes a server that would need patching."],
            ["Content as data", "New services and articles are data entries, not new pages to design."]
          ] },
        { type: "screens", id: "screens", nav: "Screens", title: "The website",
          items: [
            ["case-studies/byteaxistech/home.jpg", "Home page: how an engagement runs, shown as an interactive diagram."],
            ["case-studies/byteaxistech/service.jpg", "Service page — Cloud Security: what gets reviewed and how."],
            ["case-studies/byteaxistech/contact.jpg", "Contact page and form."],
            ["case-studies/byteaxistech/mobile.jpg", "Mobile view."]
          ] }
      ]
    }
  }
];
