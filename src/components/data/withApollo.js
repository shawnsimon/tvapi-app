import { gql, useQuery } from "@apollo/client";

const useSomeData = () => {
  const { data: someData, loading, error } = useQuery(gql`
      fetchSomeData {
        data {
          # some fields
        }
      }
  `);
  return { someData, loading, error };
};
