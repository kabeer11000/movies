import {View} from "react-native";
import LargeCard from "../components/Card";
import {useEffect, useState} from "react";
import Row from "../components/Row";
import {IYTSResponse} from "../types";

const HomeScreen = () => {
    const [response, setResponse] = useState<{ data: null | IYTSResponse, loaded: boolean, loading: boolean }>({
        data: null,
        loaded: false,
        loading: false,
    });
    const loadMovies = async () => {
        setResponse({
            data: null,
            loaded: false,
            loading: true,
        });
        const response: IYTSResponse = await (await fetch("https://api.allorigins.win/raw?url=" + encodeURIComponent("https://pastebin.com/raw/FysPmNLe"))).json();
        setResponse({
            data: response,
            loaded: true,
            loading: false,
        });
        console.log(response)
    }
    useEffect(() => {
        loadMovies();
    }, [])
    return (
        <View style={{
            height: "100%",
            width: "100%",
        }}>
            {response.loaded && response.data ? <Row title={"Top Movies"} items={response.data.data.movies}/> : response.loading ? <View>Loading</View> : null}
        </View>
    )
};
export default HomeScreen;