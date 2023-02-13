import React, { useEffect, useState } from "react";
import { Text } from "../components/form/text";
import { Title } from "../components/form/title/styles";
import { Button, Container, Input, InputContainer, Item } from "../styles/styles/list";

interface ListItem {
    item: string;
    time: string;
}

export default function List () {
    const [list, setList] = useState<ListItem[]>([]);
    const [item, setItem] = useState("");
    const [count, setCount] = useState(0);

    const handleItemList = () => {
        const newItem = {
            item,
            time: new Date().toLocaleTimeString("pt-br", {
                hour: "2-digit",
                minute: "2-digit",
            }),
        };
        setList([...list, newItem]);
        setItem("");
    };

    useEffect(() => {
        setTimeout(() => {
            setCount(list.length);
        });
    }, [list]);

    return (
        <Container>
            <Title
                tag="h3"
                fontSize="slg"
                fontWeight={700}
                // color={theme.blue_100}
                title="Crie sua lista"
            />
            <Text title={`Total de itens: ${count}`} fontSize="lg" />

            <InputContainer>
                <Input
                    type="text"
                    value={item}
                    onChange={(event) => setItem(event.target.value)}
                />
                <Button onClick={handleItemList}>Adicionar</Button>
            </InputContainer>

            {list.map((listItem, count) => {
                return (
                    <Item key={count + 1}>
                        {listItem.item} - {listItem.time}
                    </Item>
                );
            })}
        </Container>
    );
};
