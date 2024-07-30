import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    FlatList,
    Modal,
    TouchableWithoutFeedback,
    Platform,
  } from "react-native";
  import React, { useCallback, useRef, useState } from "react";
  import { AntDesign } from "@expo/vector-icons";
  import { Ionicons } from '@expo/vector-icons';
  
  type OptionItem = {
    value: string;
    label: string;
  };
  
  interface DropDownProps {
    data: OptionItem[];
    onChange: (item: OptionItem) => void;
    placeholder: string;
  }
  
  export default function Dropdown({
    data,
    onChange,
    placeholder,
  }: DropDownProps) {
    const [expanded, setExpanded] = useState(false);
  
    const toggleExpanded = useCallback(() => setExpanded(!expanded), [expanded]);
  
    const [value, setValue] = useState("");
  
    const buttonRef = useRef<View>(null);
  
    const [top, setTop] = useState(0);
  
    const onSelect = useCallback((item: OptionItem) => {
      onChange(item);
      setValue(item.label);
      setExpanded(false);
    }, []);
    return (
      <View
      
        ref={buttonRef}
        onLayout={(event) => {
          const layout = event.nativeEvent.layout;
          const topOffset = layout.y;
          const heightOfComponent = layout.height;
  
          const finalValue =
            topOffset + heightOfComponent + (Platform.OS === "android" ? -32 : 3);
  
          setTop(finalValue);
        }}
      >
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.8}
          onPress={toggleExpanded}
        >
          <Text style={styles.text}>{value || placeholder}</Text>
          <Ionicons style={styles.dropicon} name={expanded ? "chevron-up" : "chevron-down"} size={18} color="gray" />
          
        </TouchableOpacity>
        {expanded ? (
          <Modal visible={expanded} transparent>
            <TouchableWithoutFeedback onPress={() => setExpanded(false)}>
              <View style={styles.backdrop}>
                <View
                  style={[
                    styles.options,
                    {
                      top,
                    },
                  ]}
                >
                  <FlatList
                    keyExtractor={(item) => item.value}
                    data={data}
                    renderItem={({ item }) => (
                      <TouchableOpacity
                        activeOpacity={0.8}
                        style={styles.optionItem}
                        onPress={() => onSelect(item)}
                      >
                        <Text>{item.value}</Text>
                      </TouchableOpacity>
                    )}
                    ItemSeparatorComponent={() => (
                      <View style={styles.separator} />
                    )}
                  />
                </View>
              </View>
            </TouchableWithoutFeedback>
          </Modal>
        ) : null}
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    backdrop: {
      
      padding: 16,
      justifyContent: "center",
      alignItems: "center",
      flex: 1,
      top:200,
      borderBottomWidth:1,
      
    },
    optionItem: {
      height: 40,
      justifyContent: "center",
    },
    separator: {
      height: 4,
    },
    options: {
        position: "absolute",
        backgroundColor: "#ffffff",
        width: "100%",
        padding: 10,
        borderRadius: 6,
        maxHeight: 250,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 5, // For Android shadow
        zIndex: 1000,
        overflow: "hidden", // To enable scrolling
        borderColor: "#ddd",
        borderWidth: 1,
        marginTop: 5,
        
      },
    text: {
     
      fontSize: 15,
      opacity: 0.8,
    },
    button: {
      
      height: 50,
      justifyContent: "space-between",
      backgroundColor: "#E9E9E9",
      flexDirection: "row",
      width: "92%",
      alignItems: "center",
      paddingHorizontal: 15,
      borderRadius: 8,
    },
    dropicon:{
        left:10,
    },
  });