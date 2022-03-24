import React, {useState} from "react";
import { Text, View, FlatList, Box, Center } from "native-base";
import AppCard from "../Components/AppCard";
import ApiFeed from "../Api/ApiFeed";

function FeedScreen() {
  const [myJson, setMyJson] = useState([]);

  const postApi = async () => {
    const result = await ApiFeed.get("/posts");
    if (result.ok) return setMyJson(result.data);
  };
  postApi();

  const renderItem = ({ item }) => <AppCard title={item.title} />;
  return (
    <Box flex={1}>
        <FlatList
          data={myJson}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
    </Box>
  );
}

export default FeedScreen;
