import React from "react";
import { Formik } from 'formik';
import { Search, SearchForm, SearchFormBtn, Input } from "./Searchbar.styled"
export const Searchbar = ({ onSubmit }) => {

    const handleSubmit = (values, actions) => {
        onSubmit(values);
        actions.resetForm();
    }

    return (
        <Search>
            <Formik initialValues={{ search: '' }}
                onSubmit={handleSubmit}>
                <SearchForm>
                    <SearchFormBtn type="submit">
                        <span >Search</span>
                    </SearchFormBtn>
                    <Input
                        name='search'
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                    />
                </SearchForm>
            </Formik>
        </Search>
    )
}