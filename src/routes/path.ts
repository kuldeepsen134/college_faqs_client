import AdmissionProcess from "../Components/public/static/PATH 1/Admission Process";
import DistanceMba from "../Components/public/static/PATH 1/Distance MBA";
import ExecutiveMBA from "../Components/public/static/PATH 1/Executive MBA";
import IntergratedMba from "../Components/public/static/PATH 1/Integrated MBA";
import MbaorPgdm from "../Components/public/static/PATH 1/MbaorPgdm";
import OnlineMBA from "../Components/public/static/PATH 1/Online MBA";
import PartTimeMbaa from "../Components/public/static/PATH 1/PART Time Mbaa ";
import WhyMba from "../Components/public/static/PATH 1/WhyMba";
import BankingFinance from "../Components/public/static/PATH 2/Banking _Finance";
import BusinessAnalytics from "../Components/public/static/PATH 2/Business Analytics";
import FinanceManagemant from "../Components/public/static/PATH 2/Finance Management";
import HealthcareManagement from "../Components/public/static/PATH 2/Healthcare Management";
import HRManagament from "../Components/public/static/PATH 2/HR Management";
import InternationalBusiness from "../Components/public/static/PATH 2/International Business";
import MarketingManagement from "../Components/public/static/PATH 2/Marketing Management";
import MBASpecialisation from "../Components/public/static/PATH 2/MBA Specialisation";
import RuralManagements from "../Components/public/static/PATH 2/Rural Management";
import ATMA from "../Components/public/static/PATH 3/ATMA";
import CAT2022 from "../Components/public/static/PATH 3/CAT 2022";
import CMAT2023Incomplete from "../Components/public/static/PATH 3/CMAT 2023 - Incomplete";
import IBSAT2023 from "../Components/public/static/PATH 3/IBSAT 2023";
import MAHCET from "../Components/public/static/PATH 3/MAH CET";
import MATIncomplete from "../Components/public/static/PATH 3/MAT - Incomplete";
import NMAT2022 from "../Components/public/static/PATH 3/NMAT 2022";
import Snap2022 from "../Components/public/static/PATH 3/SNAP 2022";
import XAT2023 from "../Components/public/static/PATH 3/XAT 2023";

import Signup from "../Pages/signup";
import LoginWrapper from "../Pages/Auth";
// import Signup from "../Pages/Auth/signup";
import Collages from "../Pages/Collages";
import CollegeDetails from "../Pages/CollegeDetails";
import CollegeList from "../Pages/CollegeList";
import CustomPage from "../Pages/CustomPages";
import Home from "../Pages/Home";
import Login from "../Pages/login";
import Profile from "../Pages/Profile";
import AdvertisingCommunication from "../Components/public/static/PATH 2/Advertising _ Communication";
import AgriBusiness from "../Components/public/static/PATH 2/Agri-Business";
import CorporateSocialResponsibility from "../Components/public/static/PATH 2/Corporate Social Responsibility";
import DigitalMarketing from "../Components/public/static/PATH 2/Digital Marketing";
import Entrepreneurship from "../Components/public/static/PATH 2/Entrepreneurship";
import Energy from "../Components/public/static/PATH 2/Energy";
import Aviation from "../Components/public/static/PATH 2/Aviation";
import FamilyBusiness from "../Components/public/static/PATH 2/Family Business";
import FashionDesign from "../Components/public/static/PATH 2/Fashion Design";
import ImportExport from "../Components/public/static/PATH 2/Import _ Export";
import InformationTechnology from "../Components/public/static/PATH 2/Information Technology";
import Infrastructure from "../Components/public/static/PATH 2/infrastructure";
import OilGas from "../Components/public/static/PATH 2/Oil _Gas";
import PharmaceuticalManagement from "../Components/public/static/PATH 2/Pharmaceutical Management";
import Retail from "../Components/public/static/PATH 2/Retail";
import SportsManagement from "../Components/public/static/PATH 2/Sports Management";
import SupplyChai_LogisticsManagement from "../Components/public/static/PATH 2/Supply Chain _ Logistics Management";
import Telecom from "../Components/public/static/PATH 2/Telecom";
import Textile from "../Components/public/static/PATH 2/Textile";
import TourismHospitality from "../Components/public/static/PATH 2/Tourism Hospitality";
import PublicPolicy from "../Components/public/static/PATH 2/Public Policy";
import BankingInsurance from "../Components/public/static/PATH 2/Banking_Insurance";
import ServiceManagement from "../Components/public/static/PATH 2/Service Management";
import BBA from "../Components/public/static/PATH 2/BBA";
import BCA from "../Components/public/static/PATH 2/BCA";
import MCA from "../Components/public/static/PATH 2/MCA";
import AskQuestion from "../Pages/AskQuestion";
import AboutUs from "../Pages/about-us";
import PrivacyPolicy from "../Pages/privacy-policy";
import CompairCollage from "../Pages/compairCollage";
import Event from "../Components/public/static/PATH 2/Event";

export const MainRoutes = [
  {
    path: "/",
    component: Home,
    children: null,
    guard: null,
  },
  {
    path: "/test",
    component: Home,
    children: null,
    guard: null,
  },
  {
    path: "/cms",
    component: CustomPage,
    children: null,
    guard: null,
  },
  {
    path: "/collages",
    component: Collages,
    children: null,
    guard: null,
  },
  {
    path: "/login",
    component: Login,
    children: null,
    guard: null,
  },
  {
    path: "/sign-up",
    component: Signup,
    children: null,
    guard: null,
  },
  {
    path: "/college-list",
    component: CollegeList,
    children: null,
    guard: null,
  },
  {
    path: "/college-details",
    component: CollegeDetails,
    children: null,
    guard: null,
  },
  {
    path: "/college-compair/:id",
    component: CompairCollage,
    children: null,
    guard: null,
  },
  {
    path: "/ask-question",
    component: AskQuestion,
    children: null,
    guard: null,
  },
  {
    path: "/about-us",
    component: AboutUs,
    children: null,
    guard: null,
  },
  {
    path: "/privacy-policy",
    component: PrivacyPolicy,
    children: null,
    guard: null,
  },
  
]
export const DefaultRoutes = [

  {
    path: "/admission-Process",
    component: AdmissionProcess,
    children: null,
    guard: null,
  },

  {
    path: "/distance-mba",
    component: DistanceMba,
    children: null,
    guard: null,
  },

  {
    path: "/executive-mba",
    component: ExecutiveMBA,
    children: null,
    guard: null,
  },

  {
    path: "/integrated-mba",
    component: IntergratedMba,
    children: null,
    guard: null,
  },
  {
    path: "/mba-or-pgdm",
    component: MbaorPgdm,
    children: null,
    guard: null,
  },
  {
    path: "/why-mba",
    component: WhyMba,
    children: null,
    guard: null,
  },

  {
    path: "/admission-process",
    component: AdmissionProcess,
    children: null,
    guard: null,
  },

  {
    path: "/mba-more-specialisations",
    component: MBASpecialisation,
    children: null,
    guard: null,
  },

  {
    path: "/mba-in-marketing",
    component: MarketingManagement,
    children: null,
    guard: null,
  },
  {
    path: "/mba-in-finance",
    component: FinanceManagemant,
    children: null,
    guard: null,
  },


  {
    path: "/mba-in-hr",
    component: HRManagament,
    children: null,
    guard: null,
  },
  {
    path: "/mba-in-ib",
    component: InternationalBusiness,
    children: null,
    guard: null,
  },
  {
    path: "/mba-in-ba",
    component: BusinessAnalytics,
    children: null,
    guard: null,
  },

  {
    path: "/online-mba",
    component: OnlineMBA,
    children: null,
    guard: null,
  },

  {
    path: "/part-time-mba",
    component: PartTimeMbaa,
    children: null,
    guard: null,
  },



  {
    path: "/mba-in-rm",
    component: RuralManagements,
    children: null,
    guard: null,
  },

  {
    path: "/mba-in-banking-finance",
    component: BankingFinance,
    children: null,
    guard: null,
  },
  // {
  //   path: "/mba-in-operations",
  //   component: Operations,
  //   children: null,
  //   guard: null,
  // },

  {
    path: "/mba-in-hc",
    component: HealthcareManagement,
    children: null,
    guard: null,
  },

  {
    path: "/corporate-social-rs",
    component: CorporateSocialResponsibility,
    children: null,
    guard: null,
  },

  {
    path: "/digital-marketing",
    component: DigitalMarketing,
    children: null,
    guard: null,
  },


  {
    path: "/advertising-communication",
    component: AdvertisingCommunication,
    children: null,
    guard: null,
  },

  {
    path: "/agri-business",
    component: AgriBusiness,
    children: null,
    guard: null,
  },

  {
    path: "/entrepreneurship",
    component: Entrepreneurship,
    children: null,
    guard: null,
  },

  {
    path: "/energy",
    component: Energy,
    children: null,
    guard: null,
  },

  {
    path: "/aviation",
    component: Aviation,
    children: null,
    guard: null,
  },

  {
    path: "/event",
    component: Event,
    children: null,
    guard: null,
  },
  {
    path: "/family-business",
    component: FamilyBusiness,
    children: null,
    guard: null,
  },


  {
    path: "/fashion-design",
    component: FashionDesign,
    children: null,
    guard: null,
  },

  {
    path: "/finance-management",
    component: FinanceManagemant,
    children: null,
    guard: null,
  },

  {
    path: "/import-export",
    component: ImportExport,
    children: null,
    guard: null,
  },

  {
    path: "/information-technology",
    component: InformationTechnology,
    children: null,
    guard: null,
  },

  {
    path: "/infrastructure",
    component: Infrastructure,
    children: null,
    guard: null,
  },

  {
    path: "/pharmaceutical-management",
    component: PharmaceuticalManagement,
    children: null,
    guard: null,
  },

  {
    path: "/retail",
    component: Retail,
    children: null,
    guard: null,
  },
  {
    path: "/sports-management",
    component: SportsManagement,
    children: null,
    guard: null,
  },


  {
    path: "/oil-gas",
    component: OilGas,
    children: null,
    guard: null,
  },


  {
    path: "/supply-chain-logistic-management",
    component: SupplyChai_LogisticsManagement,
    children: null,
    guard: null,
  },

  {
    path: "/telecom",
    component: Telecom,
    children: null,
    guard: null,
  },

  {
    path: "/textile",
    component: Textile,
    children: null,
    guard: null,
  },
  {
    path: "/tourism-and-hospitality",
    component: TourismHospitality,
    children: null,
    guard: null,
  },
  {
    path: "/public-policy",
    component: PublicPolicy,
    children: null,
    guard: null,
  },
  {
    path: "/banking-insurance",
    component: BankingInsurance,
    children: null,
    guard: null,
  },
  {
    path: "/service-management",
    component: ServiceManagement,
    children: null,
    guard: null,
  },
  {
    path: "/cat-2022",
    component: CAT2022,
    children: null,
    guard: null,
  },


  {
    path: "/xat-2023",
    component: XAT2023,
    children: null,
    guard: null,
  },

  {
    path: "/mat",
    component: MATIncomplete,
    children: null,
    guard: null,
  },

  {
    path: "/snap-2022",
    component: Snap2022,
    children: null,
    guard: null,
  },

  {
    path: "/atma",
    component: ATMA,
    children: null,
    guard: null,
  },
  {
    path: "/nmat-2022",
    component: NMAT2022,
    children: null,
    guard: null,
  },
  {
    path: "/cmat-2023",
    component: CMAT2023Incomplete,
    children: null,
    guard: null,
  },
  {
    path: "/ibsat",
    component: IBSAT2023,
    children: null,
    guard: null,
  },
  {
    path: "/mah-cet",
    component: MAHCET,
    children: null,
    guard: null,
  },

  {
    path: "/BBA",
    component: BBA,
    children: null,
    guard: null,
  },
  {
    path: "/BCA",
    component: BCA,
    children: null,
    guard: null,
  },
  {
    path: "/MCA",
    component: MCA,
    children: null,
    guard: null,
  },




];

export const AuthRoutes = [
  {
    path: "/sign-up",
    component: Signup,
    children: null,
    guard: null,
  },
  {
    path: "/login",
    component: Login,
    children: null,
    guard: null,
  },
];


export const ProtectedRoutes = [
  {
    path: "/profile",
    component: Profile,
    children: null,
    guard: null,
  },


]