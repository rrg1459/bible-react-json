import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateLanguage } from "../../redux/quoteSlice";

const RefreshLanguage = (props) => {
  const vowel = props.activeKey.toLowerCase();
  const dispatch = useDispatch();
  useEffect(() => {
    const language = vowel === 'i' ? 0 : 1;
    dispatch(updateLanguage(language));
  }, [dispatch, vowel])
};

export default RefreshLanguage;