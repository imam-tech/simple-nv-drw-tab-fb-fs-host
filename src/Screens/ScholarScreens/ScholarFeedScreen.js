import React, { useEffect, useState } from "react";
import { Text, Box, FlatList, Input, Spinner } from "native-base";

import AppFeedCard from "../../Components/AppFeedCard";
import ApiFeed from "../../Api/ApiFeed";

function ScholarFeedScreen() {
  const [feed, setFeed] = useState();

  const getApi = async () => {
    try {
      const result = await ApiFeed.get("/posts");
      setFeed(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getApi();
  }, []);

  const renderItem = ({ item }) => <AppFeedCard id={item.id} />;
  return (
    <>
      <Box safeArea bg="#ffd600" width="100%" height="50" alignItems="center">
        <Input
          mx="3"
          placeholder="Cari"
          w="300"
          height="25"
          maxWidth="300px"
          bg="white"
        />
        <Text>Logo</Text>
      </Box>
      <Box flex={1}>
        {feed ? (
          <FlatList
            data={feed}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        ) : (
          <Spinner />
        )}
      </Box>
    </>
  );
}

export default ScholarFeedScreen;
