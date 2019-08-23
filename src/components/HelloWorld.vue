<template>
  <div>
    <el-container>
      <el-header>
        <div class="header">
          <div class="header-logo">
            <img height="20" width="100" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMzY3LjM1IDM2MCI+DQogIDxkZWZzPg0KICAgIDxzdHlsZT4NCiAgICAgIC5jbHMtMSB7DQogICAgICAgIGZpbGw6ICNmZmY7DQogICAgICB9DQogICAgPC9zdHlsZT4NCiAgPC9kZWZzPg0KICA8dGl0bGU+bG9nby3luKbmloflrZct55m9PC90aXRsZT4NCiAgPGcgaWQ9IuWbvuWxgl8yIiBkYXRhLW5hbWU9IuWbvuWxgiAyIj4NCiAgICA8ZyBpZD0i5Zu+5bGCXzEtMiIgZGF0YS1uYW1lPSLlm77lsYIgMSI+DQogICAgICA8ZyBpZD0ibG9nby3luKbmloflrZct55m9Ij4NCiAgICAgICAgPGc+DQogICAgICAgICAgPHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMjQ3LjUxLDQ1LjEyQTIxOS4wOSwyMTkuMDksMCwwLDEsMzYzLjIyLDg5LjA3bDI5LjU3LTM0QTI2My45MiwyNjMuOTIsMCwwLDAsMjQ5LjA5LjExTDI0Ny41MSwwbC0xLjU4LjExYTI2NCwyNjQsMCwwLDAtMTQzLjcsNTVsMjkuNTgsMzRBMjE5LjA2LDIxOS4wNiwwLDAsMSwyNDcuNTEsNDUuMTJaIi8+DQogICAgICAgICAgPHBhdGggY2xhc3M9ImNscy0xIiBkPSJNNDk1LDI5Mi41di00NWgtLjVBMjYyLjY4LDI2Mi42OCwwLDAsMCw0MjIuNzcsODIuMjJxLTMuMjQtMy40MS02LjU4LTYuNjdsLTM0LjA4LDI5LjYyYzIuNzIsMi42LDUuMzksNS4yNiw4LDhhMjE3Ljc5LDIxNy43OSwwLDAsMSw1OS4zMiwxMzQuMzJINDA1TDM0OC42NSwzMTAuMWwzNCwyOS41Myw0Mi40NC00Ny4xM1oiLz4NCiAgICAgICAgICA8Zz4NCiAgICAgICAgICAgIDxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTc4LjgzLDc1LjU1Yy0yLjIyLDIuMTgtNC40Miw0LjQtNi41Nyw2LjY3QTI2Mi42OCwyNjIuNjgsMCwwLDAsLjUxLDI0Ny40OUgwdjQ1SDMxLjFMOTAsMjczLjM2VjI0Ny40OUg0NS42MWEyMTcuNzksMjE3Ljc5LDAsMCwxLDU5LjMyLTEzNC4zMnEzLjktNC4xMSw4LThaIi8+DQogICAgICAgICAgICA8cG9seWdvbiBjbGFzcz0iY2xzLTEiIHBvaW50cz0iMzI4LjM4IDMxNSAxNDMuODggMzE1IDExNy40MyAyODUuNjMgNzUuMzUgMzA2LjE1IDc1LjM1IDMwNi4xNSAxMjMuODQgMzYwIDM2Ny43NSAzNjAgMzI4LjM4IDMxNSIvPg0KICAgICAgICAgIDwvZz4NCiAgICAgICAgICA8cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0yODQuMDgsMTc0LjM3SDIyMS41NWwyNi4wOSwzOS4zN2g2Mi4yOUE0NS42OCw0NS42OCwwLDAsMSwyNjksMjM5LjA2SDIyNy44MnEtMSwwLTIuMS0uMDZsLS41OCwwYy0uNTYsMC0xLjExLS4wNy0xLjY3LS4xMmwtLjQ0LDBjLS42OC0uMDgtMS4zNS0uMTYtMi0uMjZsLS41MS0uMDgtMS41NS0uMjgtLjU5LS4xMmMtLjY0LS4xMy0xLjI4LS4yOC0xLjkyLS40NGwtLjMtLjA4LTEuNjItLjQ2LS42NC0uMmMtLjQ3LS4xNS0uOTItLjMxLTEuMzgtLjQ3bC0uNTMtLjE5Yy0uNTgtLjIxLTEuMTUtLjQ0LTEuNzItLjY3bC0uNjctLjNjLS4zOC0uMTYtLjc2LS4zMy0xLjEzLS41MWwtLjcyLS4zNGMtLjQ5LS4yNC0xLS40OS0xLjQ2LS43NWwtLjc4LS40M2MtLjMzLS4xOC0uNjUtLjM3LTEtLjU2bC0uODEtLjQ5LS44NC0uNTMtMS4yNi0uODYtLjgyLS41OC0uODYtLjY2LS42MS0uNDdjLS4yOS0uMjQtLjU4LS40Ny0uODctLjcyYTMuODgsMy44OCwwLDAsMS0uMzEtLjI2Yy0uNi0uNTEtMS4xOC0xLTEuNzYtMS41OGwtLjQtLjM5LS45LS44OS0uMjgtLjNjLS42My0uNjYtMS4yMy0xLjMyLTEuODItMmwtLjA3LS4wOWMtLjMtLjM1LS41OS0uNzEtLjg4LTEuMDdsLS4yMi0uMjhjLS44OS0xLjEzLTEuNzItMi4zMS0yLjUtMy41MmExLjY0LDEuNjQsMCwwLDAtLjE0LS4yMmMtLjgxLTEuMjktMS41Ny0yLjYzLTIuMjYtNGE0NS40NSw0NS40NSwwLDAsMS00LjgtMjAuMzksNDcsNDcsMCwwLDEsMTMuNzYtMzIuODcsODQuMyw4NC4zLDAsMCwxLDUxLjYzLTI0LjE0LDg0LjU0LDg0LjU0LDAsMCwxLDUxLDIzLjU2bDEuMzYsMS40NiwyNy44Ni0yNy44Ni0xLjM3LTEuNDRBMTI0LDEyNCwwLDAsMCwyNDguOTMsOTdsLTEuNDItLjEtMS40MS4xYTEyMy42NywxMjMuNjcsMCwwLDAtNzcuOSwzNS41Miw4NSw4NSwwLDAsMC0yMi41LDgyLjkybC4wNS4xNmMuMTQuNTQuMywxLjA3LjQ1LDEuNjFsMCwuMTFhODUuNDUsODUuNDUsMCwwLDAsMi45LDguMjRsMCwuMDljLjIyLjUuNDMsMSwuNjUsMS41MmwuMDcuMTVjLjIyLjUxLjQ1LDEsLjY4LDEuNTJsMCwwYTg0LjY5LDg0LjY5LDAsMCwwLDQsNy42MSwyLDIsMCwwLDEsLjExLjJsLjgxLDEuMzMuMTMuMi44NSwxLjM1LDAsMGMxLjIzLDEuODgsMi41MywzLjcyLDMuOSw1LjQ5YTIsMiwwLDAsMCwuMTcuMjNsLjksMS4xNC4yNS4zMS45LDEuMS4yNC4yOCwxLDEuMTIuMDcuMDdjMS4wNiwxLjIyLDIuMTcsMi40MSwzLjMsMy41NmwuMjQuMjUsMSwuOTQuMzkuMzguOTIuODcuNDQuNDFjLjMuMjkuNjEuNTcuOTIuODVsLjQzLjM4LDEsLjg1LjE3LjE1cTEuMTEuOTQsMi4yNSwxLjg2bC4zMS4yNS45NC43Mi41Ni40My45MS42OC42Mi40NS44OS42NC42Ny40Ni44OC42LjcuNDYuODkuNTguOC41LDEuNTIuOTMuODEuNDcuODQuNDkuODMuNDYuODUuNDYuODYuNDUuODMuNDMuOTIuNDYuOC4zOSwxLjExLjUxLjguMzcsMS41My42Ny43My4zLDEuMDYuNDQuNzkuMzEsMSwuMzkuOC4yOSwxLjA2LjM4Ljc4LjI2LDEuMTguMzkuNjguMjFjLjYxLjE5LDEuMjIuMzgsMS44NC41NWwuNDEuMTEsMS40OS40MS43MS4xNywxLjIxLjMuNzcuMTgsMS4xOS4yNS43Ny4xNmMuNDEuMDkuODMuMTYsMS4yNC4yNGwuNzIuMTMsMS41MS4yNS40Ni4wOGMuNjUuMSwxLjMxLjE5LDIsLjI3bC41Ni4wNywxLjQ1LjE3LjczLjA3LDEuMjkuMTEuNzkuMDYsMS4yOC4wOC43NywwYy40NiwwLC45MiwwLDEuMzkuMDZsLjY2LDAsMiwwaDQwLjU3YTg1LjQzLDg1LjQzLDAsMCwwLDgyLjg3LTY0LjY5VjE3NC4zN1oiLz4NCiAgICAgICAgPC9nPg0KICAgICAgICA8Zz4NCiAgICAgICAgICA8Zz4NCiAgICAgICAgICAgIDxwb2x5Z29uIGNsYXNzPSJjbHMtMSIgcG9pbnRzPSI5ODAgMTM5Ljg3IDkyMi45NSA4Mi44MSA4NjUuOSAxMzkuODcgODg0LjMgMTU4LjI4IDkyMi45NSAxMTkuNjMgOTYxLjU5IDE1OC4yOCA5ODAgMTM5Ljg3Ii8+DQogICAgICAgICAgICA8cG9seWdvbiBjbGFzcz0iY2xzLTEiIHBvaW50cz0iMTEwNC41NiAxMzkuODcgMTA0Ny41MSA4Mi44MSA5OTAuNDcgMTM5Ljg3IDEwMDguODcgMTU4LjI4IDEwNDcuNTEgMTE5LjYzIDEwODYuMTYgMTU4LjI4IDExMDQuNTYgMTM5Ljg3Ii8+DQogICAgICAgICAgICA8cG9seWdvbiBjbGFzcz0iY2xzLTEiIHBvaW50cz0iODk4Ljg2IDE2MS4wMSA5MjIuOTUgMTM2LjkzIDk0Ny4wMyAxNjEuMDEgODk4Ljg2IDE2MS4wMSIvPg0KICAgICAgICAgICAgPHBvbHlnb24gY2xhc3M9ImNscy0xIiBwb2ludHM9IjEwMjMuNDIgMTYxLjAxIDEwNDcuNTEgMTM2LjkzIDEwNzEuNiAxNjEuMDEgMTAyMy40MiAxNjEuMDEiLz4NCiAgICAgICAgICAgIDxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTg3MS4xLDE5NlYxNzUuMTloODAuMTZWMTk2aC0yNHY3OC4wOGM3LjY0LTEuMzcsMTUuNjMtMy4xMiwyNC01LjJ2MjAuODJxLTM4LjUzLDE0LjU4LTg0LjMyLDE0LjU4di0yNWM0LjE2LDAsMjQuMTYtLjU1LDI5LjE0LTFWMTk2WiIvPg0KICAgICAgICAgICAgPHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMTAxMC41OSwyNzFhNDA4LjQ3LDQwOC40NywwLDAsMC0xMi40OC01Ni4yMmgyMC44MkEzMDguMTUsMzA4LjE1LDAsMCwxLDEwMzQuNTQsMjcxWiIvPg0KICAgICAgICAgICAgPHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMTA4OC42OSwyODcuNjN2Ny4yOXExLDEwLjQxLTkuMzcsOS4zNy05LjM5LDEtOC4zMy05LjM3VjE5My40OGwwLDEuMjZxLTEuMjUtMjQuNTktMjguMDYtMjMuNjhsLjUxLDBIOTYyLjcxdjQ1LjgxcTIuMDksNjQuNTYtMjAuODIsODguNDh2MjVxNTUuMTUtMzEuMjMsNTEtMTE1LjU2VjE5Mi44OWg0Ny45VjI5NnEtMS4wNywyOS4xMywyOC4xMSwyOC4xMWgxMy41MnEyNiwxLDI2LTI2VjI4Ny42M1oiLz4NCiAgICAgICAgICA8L2c+DQogICAgICAgICAgPGc+DQogICAgICAgICAgICA8cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik02NTguNzIsMTU5LjU4SDYzNi44NXE3LjI5LDI3LjA5LDguMzQsNDEuNjRINjAzLjU0VjIyMmg2Ni42M3EtMTAuNDEsMzEuMjMtMjMuOTQsNTBjLTExLjExLTQuODUtMTkuNDQtOC4zNC0yNS0xMC40MWE2Mi44MSw2Mi44MSwwLDAsMS0xMi41MS00LjE3djIyLjlhNDU0LjQ2LDQ1NC40NiwwLDAsMSw4Ni40Miw1My4xVjMwMS4xNnEtMTQuNi05LjM2LTI3LjA3LTE3LjY5LDIwLjgtMjMuOTQsMzQuMzUtNjEuNDNWMjAxLjIySDY3MS4yMVE2NjkuMTEsMTgyLjUsNjU4LjcyLDE1OS41OFoiLz4NCiAgICAgICAgICAgIDxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTY1My41MSwxMzAuNDNxMTcuNywzNi40NSw1NS4xOCw1OC4zMVYxNjlxLTI5LjE2LTMxLjIzLTQxLjYzLTc2SDYzOC45NHEtMTIuNSw0Ni44NS00Mi42OSw3NnYyMC44MlE2MzYuODYsMTY2Ljg4LDY1My41MSwxMzAuNDNaIi8+DQogICAgICAgICAgICA8cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik03ODYuNzcsMjM1LjU4di01My4xSDc1OC42NnY1Mi4wNnEzLjEyLDU0LjE1LTUzLjEsNzd2MTkuNzlxNDcuODgtMTQuNiw2Ny42OC00My43MywxNy42OCwyOS4xNCw2NS42LDQzLjczVjMxMS41N1E3ODQuNjksMjg3LjY1LDc4Ni43NywyMzUuNThaIi8+DQogICAgICAgICAgICA8cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik03MDUuNTYsMTAxLjI5djIwLjgyaDUxYTE1OS43MiwxNTkuNzIsMCwwLDEtNC4xNywyNy4wNkg3MTMuOVYyNzFoMjZWMTcwaDY1LjU5VjI3MWgyNlYxNzEuNzRsMCwxLjEycS0xLjE3LTIzLjA2LTI0LjgtMjMuNjljLTEuMDYsMC0yLjE0LDAtMy4yNiwwbC4yNCwwSDc4Mi42MXExLTUuMTksMy4xMi0xNS42MmExMTQuMiwxMTQuMiwwLDAsMSwyLjA4LTExLjQ0aDUyLjA2VjEwMS4yOVoiLz4NCiAgICAgICAgICA8L2c+DQogICAgICAgICAgPHJlY3QgY2xhc3M9ImNscy0xIiB4PSIxMTUwLjE4IiB5PSIxMDIuNjYiIHdpZHRoPSIxOTUuMzUiIGhlaWdodD0iMjMuOSIvPg0KICAgICAgICAgIDxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTEyNDUuNjIsMTk4LjI5aDEyMS43M1YxNzMuNDNoLTIzOXYyNC44Nmg3NS42OWMtMTEuMDgsMjkuOC0zMi4wOSw2OC4xOS01Nyw5NS4yMXYxLjgxcTEuNDMsMjIuMjYsMjQuMywyMy4xMWM0Ni41LS4xNywxMDEuMjMtMi45MywxNTQuMjMtOC4zYTEwNSwxMDUsMCwwLDAsNC4xNiwxMy41MSwxNy40NSwxNy40NSwwLDAsMSwxLDUuMkgxMzYzcS0xMi40Ni00NC42Ny0zNC4yOS04MGgtMjkuMWEzNzYuOCwzNzYuOCwwLDAsMSwxNy42NywzOC40NGMtMzUuMzMsNC4xNi04NCw2LjI0LTEzNS45Myw2LjI0QzEyMDYuOTMsMjcwLjY0LDEyMzAuMzcsMjMyLjI0LDEyNDUuNjIsMTk4LjI5WiIvPg0KICAgICAgICA8L2c+DQogICAgICA8L2c+DQogICAgPC9nPg0KICA8L2c+DQo8L3N2Zz4NCg==">
          </div>
          <div class="header-div-menu">  
             
            <div><span>处理中心</span> </div>
            <div>
              <el-dropdown trigger="hover"
                          :hide-on-click="false">
                <span>admin</span> 
                <i class="el-icon-arrow-down el-icon--right"></i>
                <el-dropdown-menu slot="dropdown">
                   <el-dropdown-item>我的消息</el-dropdown-item>
                   <el-dropdown-item>设置</el-dropdown-item>
                   <el-dropdown-item divided
                                    @click.native="logout">退出登录</el-dropdown-item>
                 </el-dropdown-menu>
              </el-dropdown>
            </div>
            <!-- <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal"
                    background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
              
              <el-menu-item index="1">处理中心</el-menu-item>
              <el-menu-item index="3">消息中心</el-menu-item>
              <el-menu-item index="4">订单管理</el-menu-item>
              
            </el-menu> -->
          </div>
        </div>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <el-col>
            <el-menu
              default-active="2"
              class="el-menu-vertical-demo"
              @open="handleOpen"
              @close="handleClose">
              <el-submenu index="1">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>导航一</span>
                </template>
                <el-menu-item index="1-1" @click="addTab(editableTabsValue2)" >选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
                <el-menu-item index="1-3">选项3</el-menu-item>
              </el-submenu>
              <el-menu-item index="2">
                <i class="el-icon-menu"></i>
                <span slot="title">导航二</span>
              </el-menu-item>
              <el-menu-item index="3" disabled>
                <i class="el-icon-document"></i>
                <span slot="title">导航三</span>
              </el-menu-item>
              <el-menu-item index="4">
                <i class="el-icon-setting"></i>
                <span slot="title">导航四</span>
              </el-menu-item>
            </el-menu>
          </el-col>
        </el-aside>

        <el-container>
          <el-main>
            <!-- <el-tabs v-model="activeName" @tab-click="handleClick">
              <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
              <el-tab-pane label="配置管理" name="second">华小猪在这儿呢</el-tab-pane>
              <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
              <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
            </el-tabs> -->
            <el-tabs v-model="editableTabsValue2" type="card" closable @tab-remove="removeTab" @tab-click="handleClick">
              
              <el-tab-pane
                v-for="(item, index) in editableTabs2"
                :key="item.name"
                :label="item.title"
                :name="item.name"
              >
              {{item.content}}
              </el-tab-pane>
              
            </el-tabs>
          </el-main>
        </el-container>

      </el-container>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      activeIndex: '1', 
      activeName: 'second',
      editableTabsValue2: '2',
      editableTabs2: [{
        title: 'Tab 1',
        name: '1',
        content: 'Tab 1 content'
      }, {
        title: 'Tab 2',
        name: '2',
        content: 'Tab 2 content'
      }],
      tabIndex: 2,
      
      
    }
  },


  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClick(tab, event) {
        console.log(tab, event);
        this.$router.push({ path: '/zj'})
    },
    addTab(targetName) {
      let newTabName = ++this.tabIndex + '';
      this.editableTabs2.push({
        title: 'New Tab',
        name: newTabName,
        content: 'New Tab content'
      });
      this.editableTabsValue2 = newTabName;
    },
    removeTab(targetName) {
      let tabs = this.editableTabs2;
      let activeName = this.editableTabsValue2;
      if (activeName === targetName) {
        tabs.forEach((tab, index) => {
          if (tab.name === targetName) {
            let nextTab = tabs[index + 1] || tabs[index - 1];
            if (nextTab) {
              activeName = nextTab.name;
            }
          }
        });
      }

      this.editableTabsValue2 = activeName;
      this.editableTabs2 = tabs.filter(tab => tab.name !== targetName);
    },

    


  }
}
</script>

<style lang="less">
  @import "../css/HelloWord.less";
</style>