import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getRequestAPI } from '.';

function useUserAPI() {
  const queryClient = useQueryClient();

  const getUserAPI = getRequestAPI('user');
  const getUser = getUserAPI('path');

  const fetchGetUser = useQuery({ queryKey: ['user'], queryFn: () => getUser({ method: 'get' }) });
  const fetchPostUser = useMutation({
    mutationFn: (data) => getUser({ method: 'post', data }),
    onSuccess: () => queryClient.invalidateQueries(['user']),
  });

  return {
    fetchGetUser,
    fetchPostUser,
  };
}

export default useUserAPI;
