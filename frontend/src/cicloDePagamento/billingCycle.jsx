import React, { Component } from 'react'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'

import Tabs from '../tab/tabs'
import TabsContents from '../tab/tabsContent'
import TabsHeader from '../tab/tabsHeader'
import TabHeader from '../tab/tabHeader'

class BillingCycle extends Component{

    render(){

        return(
            
            <div>
                <ContentHeader title='Ciclo de Pagamento' small='Versão 1.0'/>
                <Content>

                    <Tabs>
                        
                        <TabsHeader>
                            <TabHeader label='Listar' icon='bars' target='tabList'/>
                            <TabHeader label='Incluir' icon='plus' target='tabCreate'/>
                            <TabHeader label='Alterar' icon='pencil' target='tabUpdate'/>
                            <TabHeader label='Excluir' icon='trash-o' target='tabDelete'/>
                        </TabsHeader>


                        <TabsContents>


                        </TabsContents>

                    </Tabs>
                
                </Content>
            </div>
            
        )
    }
}


export default BillingCycle