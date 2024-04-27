import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import instance from '.';

function useTreeAPI(url) {
  const queryClient = useQueryClient();

  const useGetNode = (id) =>
    useQuery({
      queryKey: [url],
      queryFn: async () => {
        const { data } = await instance.get(`${url}/getNode.do`, { params: { c_id: id } });
        return data;
      },
    });
  const useGetChildNode = (id) =>
    useQuery({
      queryKey: [url],
      queryFn: async () => {
        const { data } = instance.get(`${url}/getChildNode.do`, { params: { c_id: id } });
        return data;
      },
    });
  const useGetNodesWithOutRoot = () =>
    useQuery({
      queryKey: [url],
      queryFn: async () => {
        const { data } = await instance.get(`${url}/getNodesWithOutRoot.do`);
        return data;
      },
    });

  const useAddNode = useMutation({
    mutationFn: (data) => {
      queryClient.invalidateQueries([url]);
      return instance.post(`${url}/addNode.do`, data);
    },
  });
  const useRemoveNode = useMutation({
    mutationFn: (id) => {
      queryClient.invalidateQueries([url]);
      return instance.delete(`${url}/removeNode.do`, { params: { c_id: id } });
    },
  });
  const useUpdateNode = useMutation({
    mutationFn: (data) => {
      queryClient.invalidateQueries([url]);
      return instance.put(`${url}/updateNode.do`, data);
    },
  });

  return {
    queryClient,
    useGetNode,
    useGetChildNode,
    useGetNodesWithOutRoot,
    useAddNode,
    useRemoveNode,
    useUpdateNode,
  };
}

export default useTreeAPI;
