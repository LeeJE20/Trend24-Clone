import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../../store/store";

import {
  setCustomizedComponentList,
  setInitialComponentList,
  setPageTitle,
} from "../../../../store/slices/customPageSlice";
import { api } from "../../../../apis/apiConfig";

export const useInitialPageAPI = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get("/custom/components");
        dispatch(setInitialComponentList(response.data));
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [dispatch]);
};

export const useCustomizedPageAPI = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.patch("/custom/components");
        dispatch(setCustomizedComponentList(response.data));
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [dispatch]);
};

export const useGetCustomizeTitle = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get("/custom/page");
        dispatch(setPageTitle(response.data));
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [dispatch]);
};

export const useCustomizeTitle = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.patch("/custom/page");
        dispatch(setPageTitle(response.data));
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [dispatch]);
};
