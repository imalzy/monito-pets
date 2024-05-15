export const formatPrice = (value: number) => {
    // return new Intl.NumberFormat("id-ID", {
    //   style: "currency",
    //   currency: "IDR",
    // }).format(value);

    
    return new Intl.NumberFormat("it-IT", {
      style: "currency",
      currency: "VND",
    }).format(value);
  };