 interface FilterProps {
    manufacturer?: string;
    year?: number;
    model?: string;
    limit?: number;
    fuel?: string;
  }
  
   interface HomeProps {
    searchParams: FilterProps;
  }
  