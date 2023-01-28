export const getInitialNominees = (categories) => {
    return categories.reduce(
      (category, curr) => ({ ...category, [curr.id]: null }),
      {}
    );
  };
  
  export const areAllNomineesSelected = (selectedNomimees) => {
    console.log(selectedNomimees,"seeeeeee")
    return Object.values(selectedNomimees).every((nominee) => Boolean(nominee));
  };
  