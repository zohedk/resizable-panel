import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import axios from "axios";
import { baseUrl } from "../../lib/constants";
import { ResponseData, InputData } from "../../lib/types";
import toast from "react-hot-toast";

export const useGetData = () => {
  const query = useQuery({
    queryKey: ["get-data"],
    queryFn: async () => {
      //  measuring executaion time
      const then = Date.now();
      const data = (await axios.get(`${baseUrl}/child-data`))
        .data as ResponseData<"child-data">;
      const now = Date.now();

      console.log("executaion time for get data  is :", now - then);
      return data;
    },
  });
  return { getDataQuery: query, childData: query.data };
};

export const useGetCount = () => {
  const query = useQuery({
    queryKey: ["get-count"],
    queryFn: async () => {
      const then = Date.now();
      const data = (await axios.get(`${baseUrl}/child-data/count`))
        .data as ResponseData<"count">;

      const now = Date.now();
      console.log("executaion time for get count  is :", now - then);
      return data;
    },
  });

  return { getCountQuery: query, countData: query.data };
};

export const useAddData = () => {
  //
  const queryClient = useQueryClient();
  //
  const mutation = useMutation({
    mutationKey: ["add-data"],
    mutationFn: async (body: InputData<"add">) => {
      //

      toast.loading("adding data", { id: "add-data" });
      //
      const then = Date.now();
      await axios.post(`${baseUrl}/child-data/create`, body);
      const now = Date.now();
      console.log("executaion time for adding data  is :", now - then);
    },
    onSuccess: () => {
      toast.success("data added", { id: "add-data" });
      queryClient.invalidateQueries({ queryKey: ["get-data"] });
    },
    onError: (e) => {
      console.log(e);
      toast.error("Error", { id: "add-data" });
    },
  });
  return { addDataMutaion: mutation };
};

export const useUpdateData = () => {
  //
  const queryClient = useQueryClient();
  //
  const mutation = useMutation({
    mutationKey: ["update-data"],
    mutationFn: async (body: InputData<"update">) => {
      //
      toast.loading("updatin data", { id: "update-data" });
      //
      const then = Date.now();
      await axios.put(`${baseUrl}/child-data/update`, body);
      const now = Date.now();
      console.log("executaion time for updating data data  is :", now - then);
    },
    onSuccess: () => {
      toast.success("data updated", { id: "update-data" });
      queryClient.invalidateQueries({ queryKey: ["get-data"] });
    },
    onError: (e) => {
      console.log(e);
      toast.error("Error", { id: "update-data" });
    },
  });
  return { updateDataMutaion: mutation };
};
