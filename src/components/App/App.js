import {Layout} from "antd";
import Topbar from "../Topbar/Topbar";
import SidebarLeft from "../Sidebar/SidebarLeft";
import SidebarRight from "../Sidebar/SidebarRight";
import Messenger from "../Messenger/Messenger";
import {useState} from "react";
import {Provider} from "react-redux";
import store from "../../redux/store";

const {Content} = Layout;

function App() {
    const [rightSidebarState, setRightSidebarState] = useState(true);

    const handleInformationButtonClick = () => {
        setRightSidebarState(!rightSidebarState);
    };

    return (
        <Provider store={store}>
            <Layout style={{minHeight: '100vh'}}>
                <Topbar/>

                <Layout>
                    <SidebarLeft/>

                    <Layout style={{padding: 0}}>
                        <Content style={{margin: 0}}>
                            <Messenger
                                onInformationButtonClick={handleInformationButtonClick}
                                rightSidebarState={rightSidebarState}
                            />
                        </Content>
                    </Layout>

                    {rightSidebarState ? <SidebarRight/> : ''}
                </Layout>
            </Layout>
        </Provider>
    );
}

export default App;
