export const SplitData = (details: any) => {
  // let arr = details &&  details.split(",") 
  // //  arr = JSON.parse(details);

  // let data = arr && arr.length > 0 && arr[0].split(",")
  // return data

  let arr: string[] = [];
  try {
    arr = JSON.parse(details);
  } catch (error) {
    // If parsing as JSON fails, try splitting the input string
    arr = details.split(",");
  }
  // Split the first element of the array
  let data = arr[0] && arr[0].split(",");
  return data;
}


export const specializationData = [
  {
    id: 'mba_marketing',
    name: 'Marketing',
  },
  {
    id: 'mba_finance',
    name: 'Finance',
  },
  {
    id: 'mba_hr',
    name: 'HR',
  },
  {
    id: 'mba_ruralManagement',
    name: 'Rural Management',
  },
  {
    id: 'mba_operations',
    name: 'Operations',
  },
  {
    id: 'mba_healthcare',
    name: 'Healthcare',
  },
  {
    id: 'mba_internationalBusiness',
    name: 'International Business',
  },
  {
    id: 'mba_businessAnalytics',
    name: 'Business Analytics',
  },
  {
    id: 'mba_bankingFinance',
    name: 'Banking Finance',
  },
  {
    id: 'mba_advertisingCommunications',
    name: 'Advertising Communications',
  },
  {
    id: 'mba_agriBusiness',
    name: 'Agri Business',
  },
  {
    id: 'mba_corporateSocialResponsibility',
    name: 'Corporate Social Responsibility',
  },
  {
    id: 'mba_digitalMarketing',
    name: 'Digital Marketing',
  },
  {
    id: 'mba_entrepreneurship',
    name: 'Entrepreneurship',
  },
  {
    id: 'mba_energy',
    name: 'Energy',
  },
  {
    id: 'mba_aviation',
    name: 'Aviation',
  },
  {
    id: 'mba_event',
    name: 'Event',
  },
  {
    id: 'mba_familyBusiness',
    name: 'Family Business',
  },
  {
    id: 'mba_fashionDesign',
    name: 'Fashion Design',
  },
  {
    id: 'mba_financeManagement',
    name: 'Finance Management',
  },
  {
    id: 'mba_importExport',
    name: 'Import Export',
  },
  {
    id: 'mba_informationTechnology',
    name: 'Information Technology',
  },
]